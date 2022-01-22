import React from "react";
import styled from "styled-components";
import lupa from "../img/lupa.svg"

const TagBody = styled.div`
  display: flex;
  width: 100%;
`;

const TagMaeFiltro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #161224;
`;

const Titulo = styled.div`
  display: flex;
  align-content: center;
  background-color: #cec5f0;
  padding: 0 20px;
`

const Imagem = styled.img`
  margin-right: 10px;
`

const Inputs = styled.input`
  margin-left: 20px;
  width: 70%;
`

const Labels = styled.label`
  padding: 16px 20px 8px 20px;
  color: white;
`

const Botao = styled.button`
  width: 100px;
  margin-top: 30px;
  margin-left: 20px;
  border: none;
  text-decoration: none;
  background-color: #efebff;
  padding: 0.5em;
`

class FiltroEsquerdo extends React.Component {
  render() {
    return (
      <TagBody>
        <TagMaeFiltro>
          <Titulo>
            <Imagem src={lupa}/>
            <h2>Filtros:</h2>
          </Titulo>
          <Labels for="minimo">Valor Minimo:</Labels>
          <Inputs
            type="number"
            name="minimo"
            value={this.props.valorInputMin}
            onChange={this.props.funcaoInputMin}
            placeholder="min"
          />
          <Labels for="maximo">Valor Máximo:</Labels>
          <Inputs
            type="number"
            name="maximo"
            value={this.props.valorInputMax}
            onChange={this.props.funcaoInputMax}
            placeholder="max"
          />
          <Labels for="produto">Busca por Nome:</Labels>
          <Inputs
            name="produto"
            value={this.props.valorInputNome}
            onChange={this.props.funcaoInputNome}
            placeholder="produto"
          />
          <Botao onClick={this.props.limparFiltros}>Limpar Filtros</Botao>
        </TagMaeFiltro>
      </TagBody>
    );
  }
}

export default FiltroEsquerdo;
