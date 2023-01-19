import React, { useState } from 'react';
import { 
  ButtonText,
  DownChevron,
  FilterButton,
  FilterContainer,
  FilterItem,
  FilterItemButton,
  FilterItemText,
  FilterMenu,
  TextWrapper
} from './FilterElements';

const Filter = (props) => {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);

  return (
    <FilterContainer>
      <FilterButton onClick={() => setOpenFilterMenu(!openFilterMenu)}>
        <TextWrapper>
          <ButtonText>Filter by Region</ButtonText>
          <DownChevron />
        </TextWrapper>
      </FilterButton>
      <FilterMenu openFilterMenu={openFilterMenu}>
        <FilterItem>
          <FilterItemButton 
          onClick={() => props.handler('all')}
          active={props.activeFilter === 'all' ? 'rgba(0, 0, 0, 0.1)' : 'hsl(0, 0%, 100%);'}
          >
            <FilterItemText>All</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('africa')}
          active={props.activeFilter === 'africa' ? 'rgba(0, 0, 0, 0.1)' : 'hsl(0, 0%, 100%);'}
          >
            <FilterItemText>Africa</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('americas')}
          active={props.activeFilter === 'americas' ? 'rgba(0, 0, 0, 0.1)' : 'hsl(0, 0%, 100%);'}
          >
            <FilterItemText>Americas</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('asia')}
          active={props.activeFilter === 'asia' ? 'rgba(0, 0, 0, 0.1)' : 'hsl(0, 0%, 100%);'}
          >
            <FilterItemText>Asia</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('europe')}
          active={props.activeFilter === 'europe' ? 'rgba(0, 0, 0, 0.1)' : 'hsl(0, 0%, 100%);'}
          >
            <FilterItemText>Europe</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('oceania')}
          active={props.activeFilter === 'oceania' ? 'rgba(0, 0, 0, 0.1)' : 'hsl(0, 0%, 100%);'}
          >
            <FilterItemText>Oceania</FilterItemText>
          </FilterItemButton>
        </FilterItem>
      </FilterMenu>
    </FilterContainer>
  );
};

export default Filter;