import styled from 'styled-components';

import Switch from 'react-switch';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
  height: 100vh;

  padding: 50px;

  background-color: ${props => props.theme.background};
`;

export const Title = styled.span`
  color: ${props => props.theme.featured};
  font-size: 40px;
  font-weight: bold;
`;

export const Text = styled.span`
  color: ${props => props.theme.text};
`;

export const ThemeSwitcher = styled(Switch)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px 0;

  svg {
    padding-left: 7px;
    color: #333;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.link};

  padding: 0 10px;

  transition: color 300ms ease;

  &:hover {
    color: ${props => props.theme.linkHover};
  }

  &:not(:last-child) {
    border-right: 2px solid ${props => props.theme.gray};
  }
`;
