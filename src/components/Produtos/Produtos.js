import React from "react";
import styled from "styled-components";
import FiltroEsquerdo from "../FiltroEsquerdo/FiltroEsquerdo";
import CardProdutos from "./CardProdutos";

const ContainerProdutos = styled.div`
  border: 1px solid black;
`;

const HeaderProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const ListaProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3 1fr);
`;
export default class Produtos extends React.Component {
  state = {
    sortingParameter: "valor",
    ordem: 1,
  };

  onChangeOrdenarProdutos = (e) => {
    this.setState({ ordem: e.target.value });
  };

  ordenarProdutos = () => {
    this.props.productlist.sort((a, b) => {
      this.state.ordem * (a.valor - b.valor);
    });
  };

  render() {
    return (
      <ContainerProdutos>
        <HeaderProdutos>
          <p>Quantidade de produtos: {this.props.productlist.length} </p>
          <label>
            Ordenação:
            <select value={this.state.ordem}>
              <option value={1} onChange={this.onChangeOrdenarProdutos}>
                Crescente
              </option>
              <option value={-1} onChange={this.onChangeOrdenarProdutos}>
                Decrescente
              </option>
            </select>
          </label>
        </HeaderProdutos>
        <ListaProdutos>
          {this.props.productlist.map((produto) => {
            return <CardProdutos produto={produto} />;
          })}
        </ListaProdutos>
      </ContainerProdutos>
    );
  }
}
