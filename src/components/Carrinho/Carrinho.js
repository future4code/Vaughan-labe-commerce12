import React from "react";
import styled from "styled-components";
import ProdutoCarrinho from "./ProdutoCarrinho";

const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    border: black 1px solid;
    margin: 10px;
`

const Titulo = styled.h4`
  margin-left: 20px;
`

const Total = styled.p`
  margin-left: 20px;
`

const Botao = styled.button`
  width: 100px;
  margin-left: 20px;
`

class Carrinho extends React.Component {
  render() {
    const listaDeProdutos = this.props.produtosNoCarrinho.map((produto) => {
      return (
        <ProdutoCarrinho
          key={produto.id}
          id={produto.id}
          quantidade={produto.qtd}
          nome={produto.nome}
          removeProduto={this.props.removeProduto}
        />
      );
    });

    const valorTotal = () => {
      let soma = 0;

      for (let i of this.props.produtosNoCarrinho) {
        soma = soma + i.valor * i.qtd;
      }

      return soma;
    };

    return (
      <ContainerCarrinho>
        <Titulo>Carrinho:</Titulo>

        <div>{listaDeProdutos}</div>

        <Total>Valor total: R${valorTotal()},00</Total>
        <Botao onClick={this.props.esvaziarCarrinho}>Esvaziar Carrinho</Botao>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;
