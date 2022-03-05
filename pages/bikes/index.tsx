import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';

import Builder from 'modules/builder/containers/Builder';
import Header from 'components/header/Header';
import { IColors, IGroup } from 'definitions/Bikes.d';
import GroupListContainer from 'modules/group/containers/GroupListContainer';
import { get, post } from 'utils/fetcher';
import Button from 'components/commons/button';
import { useLocalStorage } from 'utils/hooks/useStorage';

import type { NextPage } from 'next';

const VIEWS = {
  path: 'path',
  builder: 'builder',
};

interface HomeProps {
  groups: IGroup;
}

const Home: NextPage<HomeProps> = ({ groups }) => {
  const intl = useIntl();
  const router = useRouter();
  const [view, setView] = useState(VIEWS.builder);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<any | null>(null);
  const [currentGroups, setCurrentGroups] = useLocalStorage<IGroup | null>('groups');
  const [saveFailed, setSaveFailed] = useLocalStorage<boolean>('save_failed');
  const [isSaveDisabled, setSaveDisabled] = useState(true);
  const isTeacher = router.query.teacher;

  useEffect(() => {
    if (!saveFailed) {
      setCurrentGroups(groups);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentGroups && activeGroupId) setActiveGroup(currentGroups[activeGroupId]);
    else setActiveGroup(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGroupId]);

  const handleComponentChange = (colors: IColors) => {
    if (activeGroupId && activeGroup) {
      activeGroup.colors = colors;
      setCurrentGroups({
        ...currentGroups,
        [activeGroupId]: activeGroup,
      });
    }
    setSaveDisabled(false);
  };

  const handleGroupClick = (id: string) => {
    if (activeGroupId === id) {
      setActiveGroupId(null);
    } else {
      setActiveGroupId(id);
    }
  };

  const handleSaveClick = async () => {
    if (isTeacher) {
      setSaveDisabled(true);
      try {
        await post('/bikes', currentGroups);
        setSaveFailed(false);
      } catch (e) {
        setSaveDisabled(false);
        setSaveFailed(true);
        throw new Error('Unabled to save');
      }
    }
  };

  return (
    <div>
      <Header
        title={intl.formatMessage({ id: 'builder.title' })}
        description={intl.formatMessage(
          { id: 'builder.description' },
          { group: activeGroup?.label }
        )}
      />
      <Builder
        components={activeGroup?.components || {}}
        colors={activeGroup?.colors || {}}
        onComponentChange={handleComponentChange}
      />
      {currentGroups ? (
        <GroupListContainer
          activeGroupId={activeGroupId}
          groups={currentGroups}
          onClick={handleGroupClick}
        />
      ) : null}

      {isTeacher ? (
        <Button fixed={['bottom', 'right']} disabled={isSaveDisabled} onClick={handleSaveClick}>
          <FormattedMessage id={`common.save`} />
        </Button>
      ) : null}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await get('/bikes');

  return {
    props: {
      groups: res,
    },
  };
};

export default Home;
