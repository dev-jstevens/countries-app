import React, { useState, useContext } from 'react';
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
import { ThemeContext } from '../../ThemeContext';

const Filter = (props) => {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <FilterContainer>
      <FilterButton onClick={() => setOpenFilterMenu(!openFilterMenu)} darkMode={darkMode}>
        <TextWrapper>
          <ButtonText darkMode={darkMode}>Filter by Region</ButtonText>
          <DownChevron darkMode={darkMode} />
        </TextWrapper>
      </FilterButton>
      <FilterMenu openFilterMenu={openFilterMenu} darkMode={darkMode}>
        <FilterItem>
          <FilterItemButton 
          onClick={() => props.handler('all')}
          active={props.activeFilter === 'all' ? 'rgba(255, 255, 255, 0.1)' : (
            darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
          )}
          >
            <FilterItemText darkMode={darkMode}>All</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('africa')}
          active={props.activeFilter === 'africa' ? 'rgba(255, 255, 255, 0.1)' : (
            darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
          )}
          >
            <FilterItemText darkMode={darkMode}>Africa</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('americas')}
          active={props.activeFilter === 'americas' ? 'rgba(255, 255, 255, 0.1)' : (
            darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
          )}
          >
            <FilterItemText darkMode={darkMode}>Americas</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('asia')}
          active={props.activeFilter === 'asia' ? 'rgba(255, 255, 255, 0.1)' : (
            darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
          )}
          >
            <FilterItemText darkMode={darkMode}>Asia</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('europe')}
          active={props.activeFilter === 'europe' ? 'rgba(255, 255, 255, 0.1)' : (
            darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
          )}
          >
            <FilterItemText darkMode={darkMode}>Europe</FilterItemText>
          </FilterItemButton>
        </FilterItem>
        <FilterItem>
          <FilterItemButton
          onClick={() => props.handler('oceania')}
          active={props.activeFilter === 'oceania' ? 'rgba(255, 255, 255, 0.1)' : (
            darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
          )}
          >
            <FilterItemText darkMode={darkMode}>Oceania</FilterItemText>
          </FilterItemButton>
        </FilterItem>
      </FilterMenu>
    </FilterContainer>
  );
};

export default Filter;