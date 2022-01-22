import React from "react";
import styled from "styled-components";
import ProdutoCarrinho from "./ProdutoCarrinho";
import carrinho from "../img/carrinho.svg"

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161224;
  height: calc(100vh - 200px);

  @media (max-width: 1150px) and (min-width: 601px){
    height: 100%;
    padding: 15px 0;
  }

  @media (max-width:600px){
    height: 100%;
    padding: 15px 0;
  }
`

const Titulo = styled.div`
  display: flex;
  align-content: center;
  background-color: #cec5f0;
  padding: 0 20px;
`

const Imagem = styled.img`
  margin-right: 10px;
`

const Total = styled.p`
  padding: 0 20px;
  color: white;
`

const Botao = styled.button`
  width: 100px;
  align-self: center;
  margin-top: 10px;
  border: none;
  text-decoration: none;
  background-color: #efebff;
  padding: 0.5em;
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
        <Titulo>
          <Imagem src={carrinho}/>
          <h2>Carrinho:</h2>
        </Titulo>

        <div>{listaDeProdutos}</div>

        <Total>Valor total: R${valorTotal()},00</Total>
        <Botao onClick={this.props.esvaziarCarrinho}>Esvaziar Carrinho</Botao>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;
