import React from "react";
import styled from "styled-components";

const TagBody = styled.div`
  display: flex;
  width: 100%;
`;

const TagMaeFiltro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  width: 20%;
  height: 90vh;
  border: 1px solid gray;
  margin: 1% 1% 0 1%;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: 1px solid black;
  align-items: center;
  margin: 20px 10px;
`;

class FiltroEsquerdo extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Perseidas",
        value: 150000,
        imageUrl: "",
      },
      {
        id: 2,
        name: "Leônidas",
        value: 350000,
        imageUrl: "",
      },
      {
        id: 3,
        name: "Líridas",
        value: 200000,
        imageUrl: "",
      },
      {
        id: 4,
        name: "Oriônidas",
        value: 450000,
        imageUrl: "",
      },
      {
        id: 5,
        name: "Eta Aquáridas",
        value: 600000,
        imageUrl: "",
      },
      {
        id: 6,
        name: "Táuridas do Sul",
        value: 810000,
        imageUrl: "",
      },
    ],

    valorInputMin: "",
    valorInputMax: "",
    valorInputNome: "",
    sortingParameter: "value",
    ordem: 1,
  };

  //FUNÇOES QUE PEGA O VALOR DO INPUT E COLOCA NO STATE

  inputMin = (e) => {
    this.setState({ valorInputMin: e.target.value });
  };

  inputMax = (e) => {
    this.setState({ valorInputMax: e.target.value });
  };

  inputNome = (e) => {
    this.setState({ valorInputNome: e.target.value });
  };

  componentDidUpdate() {}

  render() {
    const NovosCards = this.state.produtos
      //FAZ O FILTRO PELO VALOR MINIMO
      .filter((item) => {
        if (item.value > this.state.valorInputMin) {
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

        if (item.value < this.state.valorInputMax) {
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

        const novoNumeroDigitado = item.name.replace(/\s/g, "").toUpperCase();
        const novoNumeroComparado = this.state.valorInputNome
          .replace(/\s/g, "")
          .toUpperCase();

        if (novoNumeroDigitado.includes(novoNumeroComparado)) {
          return true;
        } else {
          return false;
        }
      })
      .map((card) => {
        //EXIBE O QUE FOI FILTRADO NO CARD
        return (
          <Cards>
            <img src={card.imageUrl} />
            <p>{card.name}</p>
            <p>{card.value}</p>
          </Cards>
        );
      });

    return (
      <TagBody>
        <TagMaeFiltro>
          <h2>Filtros:</h2>
          <label for="minimo">Valor Minimo:</label>
          <input
            type="number"
            name="minimo"
            value={this.state.valorInputMin}
            onChange={this.inputMin}
            placeholder="min"
          />
          <label for="maximo">Valor Máximo:</label>
          <input
            type="number"
            name="maximo"
            value={this.state.valorInputMax}
            onChange={this.inputMax}
            placeholder="max"
          />
          <label for="produto">Busca por Nome:</label>
          <input
            name="produto"
            value={this.state.valorInputNome}
            onChange={this.inputNome}
            placeholder="produto"
          />
        </TagMaeFiltro>
        {NovosCards}
      </TagBody>
    );
  }
}

export default FiltroEsquerdo;
