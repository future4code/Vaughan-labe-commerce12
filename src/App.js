import React from "react";
import FiltroEsquerdo from "./components/FiltroEsquerdo/FiltroEsquerdo";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho"
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3f 1fr;
`;

export default class App extends React.Component {
  state = {
    productList: [
      {
        id: 1,
        nome: "Perseidas",
        valor: 150000,
        foto: "https://picsum.photos/200/200?a=1",
      },
      {
        id: 2,
        nome: "Leônidas",
        valor: 350000,
        foto: "https://picsum.photos/200/200?a=2",
      },
      {
        id: 3,
        nome: "Líridas",
        valor: 200000,
        foto: "https://picsum.photos/200/200?a=3",
      },
      {
        id: 4,
        nome: "Oriônidas",
        valor: 450000,
        foto: "https://picsum.photos/200/200?a=4",
      },
      {
        id: 5,
        nome: "Eta Aquáridas",
        valor: 600000,
        foto: "https://picsum.photos/200/200?a=5",
      },
      {
        id: 6,
        nome: "Táuridas do Sul",
        valor: 810000,
        foto: "https://picsum.photos/200/200?a=6",
      },
    ],
    valorInputMin: "",
    valorInputMax: "",
    valorInputNome: "",

    produtosNoCarrinho: []
  }

  adicionaProduto = (id) => {
      const listaDeUmProduto = this.state.productList.filter((produto) => {
        if (id === produto.id) {
          return produto
        }
      })
  
      const produtoAdicionado = {
        ...listaDeUmProduto[0],
        quantidade: 1
      }

      const listaComProdutoAdicionado = [...this.state.produtosNoCarrinho, produtoAdicionado]
  
      this.setState({ produtosNoCarrinho: listaComProdutoAdicionado })
  }

  removeProduto = (id) => {
    const listaComProdutoRemovido = this.state.produtosNoCarrinho.filter((produto) => {
      if (id !== produto.id) {
        return produto
      }
    })

    this.setState({ produtosNoCarrinho: listaComProdutoRemovido })
  }


  render() {
    return (
      <AppContainer>
        <FiltroEsquerdo
          id={this.state.productList.id}
          nome={this.state.productList.nome}
          valor={this.state.productList.valor}
          foto={this.state.productList.foto}
          valorInputMax={this.state.valorInputMax}
          valorInputMin={this.state.valorInputMin}
          valorInputNome={this.state.valorInputNome}
        />
        <Produtos
          id={this.state.productList.id}
          productList={this.state.productList}
          adicionaProduto={this.adicionaProduto}
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          foto={this.state.productList.foto}
          valor={this.state.productList.valor}
          nome={this.state.productList.nome}
        />
        <Carrinho
          productList={this.state.productList}
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          removeProduto={this.removeProduto}
        />
      </AppContainer>
    );
  }
}
