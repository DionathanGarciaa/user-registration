import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Header = styled.header`
  margin 0 auto;
  padding: 25px;
  background: #722f37;
`;

export const HeaderCont = styled(Link)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;