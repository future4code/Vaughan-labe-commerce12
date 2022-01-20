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
  width: 100%;
  height: 90vh;
  border: 1px solid gray;
  margin: 1% 1% 0 1%;
`;


class FiltroEsquerdo extends React.Component {

  componentDidUpdate() {}


  render() {


    return (
      <TagBody>
        <TagMaeFiltro>
          <h2>Filtros:</h2>
          <label for="minimo">Valor Minimo:</label>
          <input
            type="number"
            name="minimo"
            value={this.props.valorInputMin}
            onChange={this.props.funcaoInputMin}
            placeholder="min"
          />
          <label for="maximo">Valor Máximo:</label>
          <input
            type="number"
            name="maximo"
            value={this.props.valorInputMax}
            onChange={this.props.funcaoInputMax}
            placeholder="max"
          />
          <label for="produto">Busca por Nome:</label>
          <input
            name="produto"
            value={this.props.valorInputNome}
            onChange={this.props.funcaoInputNome}
            placeholder="produto"
          />
        </TagMaeFiltro>
      </TagBody>
    );
  }
}

export default FiltroEsquerdo;
