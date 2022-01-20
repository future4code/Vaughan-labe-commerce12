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
    ordem: 1,
  };

  ordenarProdutos = (e) => {
    this.setState({ ordem: e.target.value });
  };

  render() {
    return (
      <ContainerProdutos>
        <HeaderProdutos>
          <p>Quantidade de produtos: {this.props.productlist.length} </p>
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
        <ListaProdutos>
          {this.props.productlist
            .sort((a, b) => {
              return this.state.ordem * (a.valor - b.valor);
            })
            .map((produto) => {
              return <CardProdutos produto={produto} />;
            })}
        </ListaProdutos>
      </ContainerProdutos>
    );
  }
}
