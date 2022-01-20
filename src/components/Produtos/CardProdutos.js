import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
`;

const DescritivoCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class CardProdutos extends React.Component {
  render() {

    return (
      <CardContainer>
        <img src={this.props.foto} />
        <DescritivoCard>
          <p>{this.props.nome}</p>
          <p>R${this.props.valor},00</p>
          <button onClick={() => this.props.adicionaProduto(this.props.id)}>Adicionar ao carrinho</button>
        </DescritivoCard>
      </CardContainer>
    );
  }
}
