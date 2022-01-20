import React from 'react';
import styled from 'styled-components';

const ContainerProduto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

class ProdutoCarrinho extends React.Component {

    render () {
        return <ContainerProduto>
       <p>{this.props.quantidade}</p>
       <p>{this.props.name}</p>
       <button onClick={() => this.props.removeProduto(this.props.id)}>Remover</button>
    </ContainerProduto>
    }
}

export default ProdutoCarrinho