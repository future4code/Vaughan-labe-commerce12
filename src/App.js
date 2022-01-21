import React from "react";
import FiltroEsquerdo from "./components/FiltroEsquerdo/FiltroEsquerdo";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import styled from "styled-components";
import aquaridas from "./components/img/aquaridas.jpeg"
import perseidas from "./components/img/perseidas.jpeg"
import liridas from "./components/img/liridas.jpeg"
import orionidas from "./components/img/orionidas.jpeg"
import tauridas from "./components/img/tauridas.jpeg"
import leonidas from "./components/img/leonidas.jpeg"

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const DivEsquerda = styled.div`
  grid-column-start: 1/2;
`;

const DivCentro = styled.div`
  grid-column-start: 2/3;

  img{
    width: 30%;
  }
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
        foto: perseidas,
        qtd: 1
      },
      {
        id: 2,
        nome: "Leônidas",
        valor: 350000,
        foto: leonidas,
        qtd: 1
      },
      {
        id: 3,
        nome: "Líridas",
        valor: 200000,
        foto: liridas,
        qtd: 1
      },
      {
        id: 4,
        nome: "Oriônidas",
        valor: 450000,
        foto: orionidas,
        qtd: 1
      },
      {
        id: 5,
        nome: "Eta Aquáridas",
        valor: 600000,
        foto: aquaridas,
        qtd: 1
      },
      {
        id: 6,
        nome: "Táuridas do Sul",
        valor: 810000,
        foto: tauridas,
        qtd: 1
      },
    ],

    valorInputMin: "",
    valorInputMax: "",
    valorInputNome: "",

    produtosNoCarrinho: [],

    ordem: 1,
  };



  adicionaProduto = (id) => {


    const lala = this.state.produtosNoCarrinho.map((item) => {
                
             return item.id
           
    });


    if(lala.includes(id)){

      const listaMaisUm = this.state.produtosNoCarrinho.map((item) => {  
        if(id === item.id){
        return {
          ...item, 
          qtd: item.qtd + 1 
         }
       }
        return item
      })

      this.setState({produtosNoCarrinho: listaMaisUm});

    }else{
      const listaDeUmProduto = this.state.productList.filter((produto) => {
        if (id === produto.id) {

          return produto;

        }
  
      });
  
  
      const produtoAdicionado = {
        ...listaDeUmProduto[0],
      };
  
      const novaLista = [...this.state.produtosNoCarrinho, produtoAdicionado]
  
      this.setState({produtosNoCarrinho: novaLista});

    }   

  };

  removeProduto = (id) => {

    const novoCart = this.state.produtosNoCarrinho.map((item) => {
      if (item.id === id){
        return {...item, qtd: item.qtd - 1}
      }
      return item;
    }).filter((item) => item.qtd > 0)

    this.setState({produtosNoCarrinho: novoCart})

    // const listaComProdutoRemovido = this.state.produtosNoCarrinho.filter(
    //   (produto) => {
    //     if (id !== produto.id) {
    //       return produto;
    //     }
    //   }
    // );

    // this.setState({ produtosNoCarrinho: listaComProdutoRemovido });
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

  // adicionaProduto = (produto) => {
  //   console.log("cheguei");
  //   const produtoAdicionado = { ...this.state.productList[produto.id - 1] };
  //   const listaComProdutoAdicionado = [
  //     ...this.state.produtosNoCarrinho,
  //     produtoAdicionado,
  //   ];

  //   this.setState({ produtosNoCarrinho: listaComProdutoAdicionado });
  // };

  ordenarProdutos = (e) => {
    this.setState({ ordem: e.target.value });
  };

  render() {

    const qtdProdutos = this.state.produtosNoCarrinho.map((i) => {
      return i.qtd
    })


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
              <button onClick={() => this.adicionaProduto(produto.id)}>
                Adicionar ao carrinho
              </button>
            </div>
          </>
        );
      });

    return (
      <AppContainer>
        <DivEsquerda>
          <FiltroEsquerdo
            funcaoInputMin={this.inputMin}
            funcaoInputMax={this.inputMax}
            funcaoInputNome={this.inputNome}
          />
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
          {cardsFiltrados}
        </DivCentro>
        <DivDireita>
          <Carrinho
            quantidade={qtdProdutos}
            productList={this.state.productList}
            produtosNoCarrinho={this.state.produtosNoCarrinho}
            removeProduto={this.removeProduto}
          />
        </DivDireita>
      </AppContainer>
    );
  }
}
