import React from "react";
import styled from "styled-components";
import FiltroEsquerdo from "../FiltroEsquerdo/FiltroEsquerdo";

const CardContainer = styled.div`
  border: 1px solid black;
`;

const DescritivoCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class CardProdutos extends React.Component {
  render() {
    const produto = this.props.produto;
    return (
      <CardContainer>
        <img src={produto.foto} />
        <DescritivoCard>
          <p>{produto.nome}</p>
          <p>R${produto.valor},00</p>
          <button>Adicionar ao carrinho</button>
        </DescritivoCard>
      </CardContainer>
    );
  }
}
