import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const FilterContainer = styled.div`
  width: 50%;
  margin-left: 12.5px;
  margin-bottom: 30px;
  border-radius: 10px;
`;

export const FilterButton = styled.button`
  width: 50vw;
  background: hsl(0, 0%, 100%);
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  width: 50vw;
`;

export const ButtonText = styled.h2`
  font-size: 1em;
  color: hsl(200, 15%, 8%);
  font-family: 'Nunito Sans';
  font-weight: 600;
  display: inline-block;
`;

export const DownChevron = styled(FaChevronDown)`
  color: hsl(200, 15%, 8%);
  display: inline-block;
  margin-left: 10px;
`;

export const FilterMenu = styled.ul`
  list-style: none;
  width: 50vw;
  margin-top: 5px;
  padding-left: 0px;
  background: hsl(0, 0%, 100%);
  position: absolute;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: ${({openFilterMenu}) => (openFilterMenu ? 'block' : 'none')};
`;

export const FilterItem = styled.li`
  width: 100%;
`;

export const FilterItemButton = styled.button`
  width: 100%;
  background: ${props => props.active};
  border: none;
  border-radius: 10px;
`;

export const FilterItemText = styled.h3`
  font-size: 1em;
  color: hsl(200, 15%, 8%);
  font-family: 'Nunito Sans';
  font-weight: 600;
`;