/** Packages */
import React from 'react';

/** Imagens */
import Logo from '../../assets/logo.png';

/** Componentes Personalizados */
import { Container, Logomarca, Body } from './styles';

const NotFound: React.FC = () => {
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

      <span className="notFound">PÁGINA NÃO ENCONTRADA</span>
      <button
        type="button"
        className="back"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        VOLTAR PARA PÁGINA INICIAL
      </button>
    </Container>
  );
};

export default NotFound;
