import React from 'react';
import styled from 'styled-components';
import ProdutoCarrinho from './ProdutoCarrinho'

const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 20%;
    border: black 1px solid;
    margin: 10px;
`
const Titulo = styled.h4`
    margin-left: 20px;
`
const Total = styled.p`
    margin-left: 20px;
`

class Carrinho extends React.Component {
    
     adicionaProduto = (produto) => {
        const produtoAdicionado = {...this.props.productList[produto.id - 1]}
        const listaComProdutoAdicionado = [...this.state.produtosNoCarrinho, produtoAdicionado]

        this.setState({produtosNoCarrinho: listaComProdutoAdicionado})
    }

    // removeProduto = (id) => {
    //     const listaComProdutoRemovido = this.props.productList.filter ((produto) => {
    //         if (id !== produto.id) {
    //             return produto
    //         }
    //     })

    //     this.setState({productList: listaComProdutoRemovido})
    // }

    render () {
        const listaDeProdutos = this.props.produtosNoCarrinho.map((produto) => {
            return (<ProdutoCarrinho key={produto.id}
                id={produto.id}
                quantidade= "1"
                name={produto.name}
                removeProduto={this.removeProduto}
                />
            )
        })

        const listaDeValores = this.props.produtosNoCarrinho.map((produto) => {            
            return produto.value
        })

        const valorTotal = (array) => {
            let soma = 0
            for (let i = 0; i < array.length; i++)
            soma = soma + array[i]
            return soma
        }

        return (
        <ContainerCarrinho>
            <Titulo>Carrinho:</Titulo>

            <div>
                {listaDeProdutos}
            </div>

            <Total>Valor total: R${valorTotal(listaDeValores)}</Total>
        </ContainerCarrinho>
        )}
}

export default Carrinho