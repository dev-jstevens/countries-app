import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';

export const SearchBarContainer = styled.div`
  width: 90%;
  margin-left: 12.5px;
  margin-bottom: 30px;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const IconWrapper = styled.button`
  border: none;
  background: hsl(0, 0%, 100%);
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SearchIcon = styled(IoMdSearch)`
  color: hsl(0, 0%, 52%);
  display: inline-block;
  font-size: 1.5em;
`;

export const SearchInput = styled.input`
  color: hsl(0, 0%, 52%);
  border: none;
  outline: none;
  background: hsl(0, 0%, 100%);
  font-size: 1em;
  display: inline-block;
`;