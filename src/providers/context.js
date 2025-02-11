import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext(null);

export function CarrinhoContextoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const addProduto = (novoProduto) => {
    setCarrinho((prevProds) => [...prevProds, novoProduto]);
  };


  const removeProduto = (id) => {
    setCarrinho((prevProds) => prevProds.filter(produto => produto.id !== id));
  };

  const limpaCarrinho = () => {
    setCarrinho([]);
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, addProduto, removeProduto, limpaCarrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}