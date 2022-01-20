import React from 'react';
import styled from 'styled-components';
import ProdutoCarrinho from './ProdutoCarrinho'

const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 100%;
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
    state = {
        produtosNoCarrinho: [
            //itens para testar funcionalidades
        //     {
        //     id: 1,
	    //     name: "Apolo 11",
	    //     value: 10000.0,
	    //     imageUrl: "https://picsum.photos/200/200",
        // },
        // {
        //     id: 2,
	    //     name: "Apolo 13",
	    //     value: 20000.0,
	    //     imageUrl: "https://picsum.photos/200/200",
        // },
        // {
        //     id: 3,
	    //     name: "Apolo 9",
	    //     value: 50000.0,
	    //     imageUrl: "https://picsum.photos/200/200",
        // },
        // {
        //     id: 4,
	    //     name: "Apolo 7",
	    //     value: 1000.0,
	    //     imageUrl: "https://picsum.photos/200/200",
        // },
        // {
        //     id: 5,
	    //     name: "Apolo 2",
	    //     value: 100000.0,
	    //     imageUrl: "https://picsum.photos/200/200",
        // }
    ]}

    removeProduto = (id) => {
        const listaComProdutoRemovido = this.state.produtosNoCarrinho.filter ((produto) => {
            if (id !== produto.id) {
                return produto
            }
        })

        this.setState({produtosNoCarrinho: listaComProdutoRemovido})
    }

    render () {
        const listaDeProdutos = this.state.produtosNoCarrinho.map((produto) => {
            return (<ProdutoCarrinho key={produto.id}
                id={produto.id}
                quantidade= "1"
                name={produto.name}
                removeProduto={this.removeProduto}
                />
            )
        })

        const listaDeValores = this.state.produtosNoCarrinho.map((produto) => {            
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