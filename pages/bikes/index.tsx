import { useState } from 'react';
import { useIntl } from 'react-intl';

import Builder from 'modules/builder/containers/Builder';
import Header from 'components/header/Header';
import { groups } from 'context/Bikes/DefaultValues';
import { IColors } from 'context/BikesContext';
import GroupListContainer from 'modules/group/containers/GroupListContainer';

import type { NextPage } from 'next';

const VIEWS = {
  path: 'path',
  builder: 'builder',
};

const Home: NextPage = () => {
  const intl = useIntl();
  const [view, setView] = useState(VIEWS.builder);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [currentGroups, setCurrentGroups] = useState(groups);

  const activeGroup = activeGroupId ? currentGroups[activeGroupId] : null;

  const handleComponentChange = (colors: IColors) => {
    if (activeGroupId && activeGroup) {
      activeGroup.colors = colors;
      setCurrentGroups({
        ...currentGroups,
        [activeGroupId]: activeGroup,
      });
    }
  };

  const handleGroupClick = (id: string) => setActiveGroupId(id);

  return (
    <div>
      <Header
        title={intl.formatMessage({ id: 'builder.title' })}
        description={intl.formatMessage(
          { id: 'builder.description' },
          { group: activeGroup?.label }
        )}
      />
      <Builder colors={activeGroup?.colors} onComponentChange={handleComponentChange} />
      <GroupListContainer
        activeGroupId={activeGroupId}
        groups={currentGroups}
        onClick={handleGroupClick}
      />
    </div>
  );
};

export default Home;
