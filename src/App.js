import React from "react";
import FiltroEsquerdo from "./components/FiltroEsquerdo/FiltroEsquerdo";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import styled from "styled-components";
// import aquaridas from "./components/img/aquaridas.jpeg"

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const DivEsquerda = styled.div`
  grid-column-start: 1/2;
`;

const DivCentro = styled.div`
  grid-column-start: 2/3;
`;

const DivDireita = styled.div`
  grid-column-start: 3/4;
`;

const HeaderProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
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

    ordem: 1,

    produtosNoCarrinho: [],
  };

  inputMin = (e) => {
    this.setState({ valorInputMin: e.target.value });
  };

  inputMax = (e) => {
    this.setState({ valorInputMax: e.target.value });
  };

  inputNome = (e) => {
    this.setState({ valorInputNome: e.target.value });
  };

  adicionaProduto = (produto) => {
    console.log("cheguei");
    const produtoAdicionado = { ...this.state.productList[produto.id - 1] };
    const listaComProdutoAdicionado = [
      ...this.state.produtosNoCarrinho,
      produtoAdicionado,
    ];

    this.setState({ produtosNoCarrinho: listaComProdutoAdicionado });
  };



  ordenarProdutos = (e) => {
    this.setState({ ordem: e.target.value });
  };


  render() {
    const cardsFiltrados = this.state.productList
      //FAZ O FILTRO PELO VALOR MINIMO
      .filter((item) => {
        if (item.valor > this.state.valorInputMin) {
          return true;
        } else {
          return false;
        }
      })
      .filter((item) => {
        //FAZ O FILTRO PELO VALOR MAXIMO
        if (!this.state.valorInputMax) {
          return true;
        }

        if (item.valor < this.state.valorInputMax) {
          return true;
        } else {
          return false;
        }
      })
      .filter((item) => {
        //FAZ O FILTRO PELO NOME DO PRODUTO
        if (!this.state.valorInputNome) {
          return true;
        }

        const novoNumeroDigitado = item.nome.replace(/\s/g, "").toUpperCase();
        const novoNumeroComparado = this.state.valorInputNome
          .replace(/\s/g, "")
          .toUpperCase();

        if (novoNumeroDigitado.includes(novoNumeroComparado)) {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => {
        return this.state.ordem * (a.valor - b.valor);
      })
      .map((produto) => {
        return (
          <>
          <img src={produto.foto} />
          <div>
          <p>{produto.nome}</p>
    <p>R${produto.valor},00</p>
    <button onClick={this.props.adicionaProduto}>Adicionar ao carrinho</button>
  </div>
          </>
        );
      })

    return (
      <AppContainer>
        <DivEsquerda>
          <FiltroEsquerdo
            funcaoInputMin={this.inputMin}
            funcaoInputMax={this.inputMax}
            funcaoInputNome={this.inputNome}
          />
          {/* {cardsFiltrados} */}
        </DivEsquerda>
        <DivCentro>

        <HeaderProdutos>
          <p>Quantidade de produtos: {cardsFiltrados.length} </p>
          <label for="ordem">
            Ordenação:
            <select
              name="ordem"
              value={this.state.ordem}
              onChange={this.ordenarProdutos}
            >
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </select>
          </label>
        </HeaderProdutos>

          {/* <Produtos
            cardFiltrado={cardsFiltrados}
            productList={this.state.productList}
            adicionaProduto={this.adicionaProduto}
          /> */}
          {cardsFiltrados}
        </DivCentro>
        <DivDireita>
          <Carrinho
            productList={this.state.productList}
            produtosNoCarrinho={this.state.produtosNoCarrinho}
          />
        </DivDireita>
      </AppContainer>
    );
  }
}
