import React from "react";
import FiltroEsquerdo from "./components/FiltroEsquerdo/FiltroEsquerdo";
import Carrinho from "./components/Carrinho/Carrinho";
import styled from "styled-components";
import aquaridas from "./components/img/aquaridas.jpeg"
import perseidas from "./components/img/perseidas.jpeg"
import liridas from "./components/img/liridas.jpeg"
import orionidas from "./components/img/orionidas.jpeg"
import tauridas from "./components/img/tauridas.jpeg"
import leonidas from "./components/img/leonidas.jpeg"
import iconPlanet from "./components/img/iconplannet.png"
import estrelinhas from "./components/img/estrelinhas.svg"

const AppContainer = styled.div`
  background-color: #161224;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px;
  background-color: #161224;
  background-image: url('https://t8j5n5j3.rocketcdn.me/wp-content/uploads/2019/08/estrela-cadente-o-que-e-e-quatro-dicas-para-conseguir-ve-la-1024x576.png');

  h2{
    background-image: linear-gradient(to right, #F0F8FF, #cec5f0, whitesmoke, #4682B4, #cec5f0, #363636);
    background-clip: text;
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
     color: black;
     margin: auto;
     font-size: 3em;
  }

  p{
    color: #fff;
    font-family: monospace;
    font-weight: bold;
    text-align: center;
    text-shadow: 
      1px -1px 0 #2f5d87;
    font-size: 1.3em;
  }

  img{
    width: 90px;
    margin: auto;
  }
`

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const DivEsquerda = styled.div`
  grid-column-start: 1/2;
`;

const DivCentro = styled.div`
  grid-column-start: 2/3;
  background-color: #161224;
  color: white;
  border-right: solid white 1px;
  border-left: solid white 1px;
`;

const DivDireita = styled.div`
  grid-column-start: 3/4;
`;

const HeaderProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-bottom: 0;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1% 2%;
  padding-bottom: 0;
  color: black;
`

const ContainerNomeProduto = styled.div`
  display: flex;
  align-content: center;
  margin-top: 1em;

  img{
    margin: 0 10px;
  }

  p{
    margin: 0;
    font-weight: bold;
  }
`

const Imagens = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`

const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 45vh;
  border: white 1px solid;
  padding-bottom: 15px;
  margin-bottom: 15px;
  background-color: #efebff;
  border-radius: 10px;
`

const Botao = styled.button`
  border: none;
  text-decoration: none;
  background-color: #161224;
  color: white;
  border-radius: 0.5em;
  padding: 0.5em;
`

const InfoProduto = styled.div`
  text-align: center;
`

const Footer = styled.footer` //<<<<<<<<<<<<<ESTILIZACAO FOOTER, DEIXAR ESPACO PARA O RESTO DO SITE USANDO HEIGHT NO CARRINHO.JS
  background-color: white;
`

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

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.produtosNoCarrinho))
  };

  componentDidMount() {
    const pNC = JSON.parse(localStorage.getItem("carrinho"))
    if (pNC) {
      this.setState({ produtosNoCarrinho: pNC })
    }
  };


  adicionaProduto = (id) => {


    const lala = this.state.produtosNoCarrinho.map((item) => {

      return item.id

    });

    if (lala.includes(id)) {

      const listaMaisUm = this.state.produtosNoCarrinho.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            qtd: item.qtd + 1
          }
        }
        return item
      })

      this.setState({ produtosNoCarrinho: listaMaisUm });

    } else {
      const listaDeUmProduto = this.state.productList.filter((produto) => {
        if (id === produto.id) {

          return produto;

        }

      });

      const produtoAdicionado = {
        ...listaDeUmProduto[0],
      };

      const novaLista = [...this.state.produtosNoCarrinho, produtoAdicionado]

      this.setState({ produtosNoCarrinho: novaLista });

    }

  };

  removeProduto = (id) => {

    const novoCart = this.state.produtosNoCarrinho.map((item) => {
      if (item.id === id) {
        return { ...item, qtd: item.qtd - 1 }
      }
      return item;
    }).filter((item) => item.qtd > 0)

    this.setState({ produtosNoCarrinho: novoCart })
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

  ordenarProdutos = (e) => {
    this.setState({ ordem: e.target.value });
  };

  esvaziarCarrinho = () => {
    this.setState({ produtosNoCarrinho: []})
  }

  limparFiltros = () => {
    this.setState({ valorInputMin: "", valorInputMax: "", valorInputNome: "" })
  }

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
          <CardProduto>
            <Imagens src={produto.foto} />
            <InfoProduto>
              <ContainerNomeProduto>
                <img src={estrelinhas}/>
                <p>{produto.nome}</p>
                <img src={estrelinhas}/>
              </ContainerNomeProduto>
              <p>R${produto.valor},00</p>
              <Botao onClick={() => this.adicionaProduto(produto.id)}>
                Adicionar ao carrinho
              </Botao>
            </InfoProduto>
          </CardProduto>
        );
      });

    return (
      <AppContainer>
        <Header>
          <img src={iconPlanet}/>
          <h2>SpaceRain</h2>
          <p>Viaje conosco nessas  oportunidades incriveis de ver de perto as chuvas mais belas do planeta.</p>
        </Header>
        <ContainerMain>
        <DivEsquerda>
          <FiltroEsquerdo
            funcaoInputMin={this.inputMin}
            funcaoInputMax={this.inputMax}
            funcaoInputNome={this.inputNome}
            limparFiltros={this.limparFiltros}
            valorInputMin={this.state.valorInputMin}
            valorInputMax={this.state.valorInputMax}
            valorInputNome={this.state.valorInputNome}
          />
        </DivEsquerda>
        <DivCentro>
          <HeaderProdutos>
            <h3>Quantidade de produtos: {cardsFiltrados.length} </h3>
            <div>
              <label for="ordem">Ordenação: </label>
              <select
                name="ordem"
                value={this.state.ordem}
                onChange={this.ordenarProdutos}
              >
                <option value={1}>Crescente</option>
                <option value={-1}>Decrescente</option>
              </select>
            </div>
          </HeaderProdutos>
          <ContainerProdutos>
            {cardsFiltrados}
          </ContainerProdutos>
        </DivCentro>
        <DivDireita>
          <Carrinho
            quantidade={qtdProdutos}
            productList={this.state.productList}
            produtosNoCarrinho={this.state.produtosNoCarrinho}
            removeProduto={this.removeProduto}
            esvaziarCarrinho={this.esvaziarCarrinho}
          />
        </DivDireita>
        </ContainerMain>
        <Footer>
          <p>footer!!</p>
        </Footer>
      </AppContainer>
    );
  }
}
