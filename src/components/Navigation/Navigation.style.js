import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Container = styled.div`
  padding: 1.125rem;
  @media (min-width: 60rem) {
    max-width: 50rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TopShelf = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media (min-width: 60rem) {
    display: block;
  }
`;

export const Logo = styled.img`
  height: 4rem;
  @media (min-width: 60rem) {
    height: 3rem;
    padding: 0.5rem 0;
  }
`;

export const HamburgerItem = styled.span`
  height: 4rem;
  color: #ffd400;
  font-size: 2rem;
`;

export const Nav = styled.nav`
  max-height: 80vh;
  opacity: 1;
  padding: 1rem 0;
  @media (min-width: 60rem) {
    opacity: 1;
    max-height: inherit;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  display: block;
  padding: 0.5rem 0;
  font-size: 1.75rem;
  @media (min-width: 60rem) {
    cursor: pointer;
    display: inline;
    font-size: 1.125rem;
    padding: 0;
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
