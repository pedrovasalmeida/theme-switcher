/** Packages */
import React from 'react';

/** Ícones */
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

/** Imagens */
import Logo from '../../assets/logo.png';

/** Componentes Personalizados */
import { Container, Logomarca, Body, Icons } from './styles';

const Home: React.FC = () => {
  const gitHubLink = 'https://github.com/pedrovasalmeida';
  const linkedInLink =
    'https://www.linkedin.com/in/pedro-vasconcellos-a272851a0/';

  return (
    <Container>
      <Logomarca src={Logo} alt="Logo" />

      <Body>
        <span>POWERED BY</span>
        <span className="title">
          Input
          <b>On</b>
        </span>
      </Body>

      <Icons>
        <FaGithub className="icon" onClick={() => window.open(gitHubLink)} />
        <FaLinkedinIn
          className="icon"
          onClick={() => window.open(linkedInLink)}
        />
      </Icons>
    </Container>
  );
};

export default Home;
