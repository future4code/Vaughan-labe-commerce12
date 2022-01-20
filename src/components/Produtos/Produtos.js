import React from "react";
import styled from "styled-components";

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
          <p>Quantidade de produtos: {this.props.productList.length} </p>
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
          {this.props.productList
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
            })}
        </ListaProdutos>
      </ContainerProdutos>
    );
  }
}
