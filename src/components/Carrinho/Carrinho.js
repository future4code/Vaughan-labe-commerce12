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

    render() {
        const listaDeProdutos = this.props.produtosNoCarrinho.map((produto) => {
            return (<ProdutoCarrinho key={produto.id}
                id={produto.id}
                quantidade={produto.quantidade}
                nome={produto.nome}
                removeProduto={this.props.removeProduto}
            />
            )
        })

        const listaDeValores = this.props.produtosNoCarrinho.map((produto) => {
            return produto.valor
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
        )
    }
}

export default Carrinho