import React, { ReactFragment, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';

import Header from 'components/header/Header';
import { IGroup } from 'definitions/Bikes.d';
import { get, post } from 'utils/fetcher';
import ColorPicker from 'components/colorPicker/ColorPicker';
import Button from 'components/commons/button';
import { useLocalStorage } from 'utils/hooks/useStorage';

import type { NextPage } from 'next';

const StyledField = styled.div`
  padding: ${({ theme }) => theme.spacings.small4};
  padding-bottom: 0;

  label {
    display: block;
  }

  textarea {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledColor = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  width: fit-content;
`;

const ColorPreview = styled.div<{ color: string }>`
  width: 24px;
  height: 12px;
  border: 2px solid #cccccc;
  background-color: ${({ color }) => color || '#ffffff'};
`;

const StyledSaveContainer = styled.div`
  text-align: center;
`;

interface ManagementProps {
  groups: IGroup;
}

const Management: NextPage<ManagementProps> = ({ groups }) => {
  const intl = useIntl();
  const [currentGroups, setCurrentGroups] = useState<IGroup | null>(groups);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [isSaveDisabled, setSaveDisabled] = useState(false);

  useEffect(() => {
    if (currentGroups && !selectedGroup) {
      const first = Object.keys(currentGroups)[0];
      setSelectedGroup(first);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGroups, selectedGroup]);

  const handleGroupSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (currentGroups) {
      setSelectedGroup(event.target.value);
    }
  };

  const handleNamesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedGroup && currentGroups) {
      const names = event.target.value.split(',');

      setCurrentGroups({
        ...currentGroups,
        [selectedGroup]: { ...currentGroups[selectedGroup], names },
      });
    }
  };

  const handleComponentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedGroup && currentGroups) {
      const { name, checked: value } = event.target;

      setCurrentGroups({
        ...currentGroups,
        [selectedGroup]: {
          ...currentGroups[selectedGroup],
          components: { ...currentGroups[selectedGroup].components, [name]: value },
        },
      });
    }
  };

  const handleColorChange = (component: string, color: string) => {
    if (selectedGroup && currentGroups) {
      setCurrentGroups({
        ...currentGroups,
        [selectedGroup]: {
          ...currentGroups[selectedGroup],
          colors: { ...currentGroups[selectedGroup].colors, [component]: color },
        },
      });
    }
  };

  const handleGroupNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedGroup && currentGroups) {
      const { value } = event.target;
      setCurrentGroups({
        ...currentGroups,
        [selectedGroup]: {
          ...currentGroups[selectedGroup],
          label: value,
        },
      });
    }
  };

  const handleSave = async () => {
    setSaveDisabled(true);
    try {
      await post('/bikes', currentGroups);
    } catch (e) {
      setSaveDisabled(false);
      throw new Error('Unabled to save');
    }
  };

  const currentGroup = currentGroups && selectedGroup ? currentGroups[selectedGroup] : null;

  return (
    <>
      <Header
        title={intl.formatMessage({ id: 'management.title' })}
        description={intl.formatMessage({ id: 'management.description' })}
      />

      {currentGroups && currentGroup && (
        <>
          <StyledField>
            <StyledLabel htmlFor="group_selection">
              <FormattedMessage id={`management.select`} />
            </StyledLabel>
            <select name="group_selection" onChange={handleGroupSelection}>
              {Object.keys(currentGroups).map(id => (
                <option key={id} value={id}>
                  {currentGroups[id].label}
                </option>
              ))}
            </select>
          </StyledField>

          <StyledField>
            <StyledLabel htmlFor="group_name">
              <FormattedMessage id={`management.group_name`} />
            </StyledLabel>
            <input
              type="text"
              name="group_name"
              value={currentGroup.label}
              onChange={handleGroupNameChange}
            />
          </StyledField>
          <StyledField>
            <StyledLabel htmlFor="group_names">
              <FormattedMessage id={`management.names`} />
            </StyledLabel>
            <textarea
              name="group_names"
              value={currentGroup.names.join(',')}
              onChange={handleNamesChange}
            />
          </StyledField>

          <StyledField>
            <StyledLabel>
              <FormattedMessage id={`management.components`} />
            </StyledLabel>
            {Object.keys(currentGroup.components).map(component => (
              <label key={component} htmlFor={component}>
                {component}
                <input
                  type="checkbox"
                  name={component}
                  checked={currentGroup.components[component]}
                  onChange={handleComponentChange}
                />
              </label>
            ))}
          </StyledField>
          <StyledField>
            <StyledLabel>
              <FormattedMessage id={`management.color`} />
            </StyledLabel>
            {Object.keys(currentGroup.components).map(component => (
              <StyledColor key={component}>
                <span>{component}</span>
                <ColorPreview color={currentGroup.colors[component]} />
                <ColorPicker
                  visible={true}
                  simple={true}
                  onChange={color => {
                    handleColorChange(component, color);
                  }}
                />
              </StyledColor>
            ))}
          </StyledField>

          <StyledSaveContainer>
            <Button onClick={handleSave} disabled={isSaveDisabled}>
              <FormattedMessage id={`common.save`} />
            </Button>
          </StyledSaveContainer>
        </>
      )}
    </>
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

export default Management;
