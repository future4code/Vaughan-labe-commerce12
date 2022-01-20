import React from "react";
import FiltroEsquerdo from "./components/FiltroEsquerdo/FiltroEsquerdo";
import Produtos from "./components/Produtos/Produtos";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3f 1fr;
`;

const ProductList = [
  {
    id: 1,
    nome: "Perseidas",
    valor: 150000,
    foto: "https://picsum.photos/200/200?a=1",
  },
  {
    id: 2,
    nome: "Leônidas",
    valor: 350000,
    foto: "https://picsum.photos/200/200?a=2",
  },
  {
    id: 3,
    nome: "Líridas",
    valor: 200000,
    foto: "https://picsum.photos/200/200?a=3",
  },
  {
    id: 4,
    nome: "Oriônidas",
    valor: 450000,
    foto: "https://picsum.photos/200/200?a=4",
  },
  {
    id: 5,
    nome: "Eta Aquáridas",
    valor: 600000,
    foto: "https://picsum.photos/200/200?a=5",
  },
  {
    id: 6,
    nome: "Táuridas do Sul",
    valor: 810000,
    foto: "https://picsum.photos/200/200?a=6",
  },
];

function App() {
  return (
    <div>
      <FiltroEsquerdo />
      <Produtos productlist={ProductList} />
    </div>
  );
}

export default App;
