import React from "react";
import styled from "styled-components";

const ContainerProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
`;

const Botao = styled.button`
  border: none;
  text-decoration: none;
  background-color: #efebff;

  &:hover{
    background-color: #9986c4;
  }
`

class ProdutoCarrinho extends React.Component {


  render() {

    return (
      <ContainerProduto>
        <p>{this.props.quantidade}</p>
        <p>{this.props.nome}</p>
        <Botao onClick={() => this.props.removeProduto(this.props.id)}>
          Remover
        </Botao>
      </ContainerProduto>
    );
  }
}

export default ProdutoCarrinho;
