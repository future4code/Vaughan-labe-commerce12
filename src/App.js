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
  
  adicionaProduto = (produto) => {
    console.log("cheguei")
    const produtoAdicionado = {...this.state.productList[produto.id - 1]}
    const listaComProdutoAdicionado = [...this.state.produtosNoCarrinho, produtoAdicionado]

    this.setState({produtosNoCarrinho: listaComProdutoAdicionado})
    
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
        productList={this.state.productList}
        adicionaProduto={this.adicionaProduto}
        />
        <Carrinho 
        productList={this.state.productList}
        produtosNoCarrinho={this.state.produtosNoCarrinho}
        />
      </AppContainer>
    );
  }
}
