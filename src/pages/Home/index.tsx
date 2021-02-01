/** Packages */
import React from 'react';

/** Ícones */
import { FaSun, FaMoon } from 'react-icons/fa';

/** Componentes */
import { useTheme } from '../../context/ThemeSwitcherContext';

/** Componentes Personalizados */
import {
  Container,
  Title,
  Text,
  ThemeSwitcher,
  LinksDiv,
  Link,
} from './styles';

const Home: React.FC = () => {
  const { themeState, changeTheme } = useTheme();

  return (
    <Container>
      <Title>Theme Switcher</Title>
      <Text>by Pedro H. V. Almeida</Text>
      <ThemeSwitcher
        onChange={changeTheme}
        checked={themeState}
        checkedIcon={<FaMoon size={20} />}
        uncheckedIcon={<FaSun size={20} />}
        offColor="#f4a261"
        onColor="#bbb"
        height={20}
      />
      <LinksDiv>
        <Link
          href="https://github.com/pedrovasalmeida"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/pedrovasalmeida/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          href="https://instagram.com/pedroohva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
      </LinksDiv>
    </Container>
  );
};

export default Home;
