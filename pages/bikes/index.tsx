import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AppProps } from 'next/dist/shared/lib/router/router';

import Builder from 'modules/builder/containers/Builder';
import Header from 'components/header/Header';
import { IColors, IGroup } from 'definitions/Bikes.d';
import GroupListContainer from 'modules/group/containers/GroupListContainer';
import { get, post } from 'utils/fetcher';
import Button from 'components/commons/button';

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
  const [view, setView] = useState(VIEWS.builder);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<any | null>(null);
  const [currentGroups, setCurrentGroups] = useState<IGroup | null>(null);
  const [isSaveDisabled, setSaveDisabled] = useState(true);

  useEffect(() => {
    setCurrentGroups(groups);
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

  const onClick = async () => {
    setSaveDisabled(true);
    try {
      await post('/bikes', currentGroups);
    } catch (e) {
      setSaveDisabled(false);
      throw new Error('Unabled to save');
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

      <Button fixed={['bottom', 'right']} disabled={isSaveDisabled} onClick={onClick}>
        <FormattedMessage id={`common.save`} />
      </Button>
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
