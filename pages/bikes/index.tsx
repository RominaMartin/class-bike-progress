import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import Builder from 'modules/builder/containers/Builder';
import Header from 'components/header/Header';
import { IColors, IGroup } from 'definitions/Bikes.d';
import GroupListContainer from 'modules/group/containers/GroupListContainer';
import { useLocalStorage } from 'utils/hooks/useStorage';
import { request } from 'utils/fetcher';

import type { NextPage } from 'next';

const VIEWS = {
  path: 'path',
  builder: 'builder',
};

const Home: NextPage = () => {
  const intl = useIntl();
  const [view, setView] = useState(VIEWS.builder);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<any | null>(null);
  const [currentGroups, setCurrentGroups] = useLocalStorage<IGroup | null>('groups');

  useEffect(() => {
    request('/bikes').then(data => {
      setCurrentGroups(data);
    });
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
  };

  const handleGroupClick = (id: string) => {
    if (activeGroupId === id) {
      setActiveGroupId(null);
    } else {
      setActiveGroupId(id);
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
    </div>
  );
};

export default Home;
