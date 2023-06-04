import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
export const List = styled.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style-type: square;
`;
export const Item = styled.li`
  font-size: 20px;
`;
