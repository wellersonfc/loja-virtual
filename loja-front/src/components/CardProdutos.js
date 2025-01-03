import React, { useEffect, useState } from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom"; 

const CardProdutos = ({ produtos }) => {
  const adicionarAoCarrinho = (produto) => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const produtoExistente = carrinho.find((item) => item.id === produto.id);
  
    if (produtoExistente) {
      produtoExistente.quantidade += 1;
    } else {
      carrinho.push({ ...produto, quantidade: 1 });
    }
  
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    window.dispatchEvent(new Event("carrinhoAtualizado"));
  };

  if (!produtos || produtos.length === 0) {
    return <div>Nenhum produto disponível.</div>;
  }

  return (
    <div className="Lista-CardProduto">
      {produtos.map((produto, index) => (
        <div className="CardProduto" key={index}>
          <Link to={`/detalheproduto?id=${produto.id}`}>
            <img src={`http://localhost:3001/api/files/`+produto.foto} alt={produto.nome} />
          </Link>
          <h3>{produto.nome}</h3>
          <span>R$ {produto.preco_diario}</span>
          <div className="product-cta">
            <button onClick={() => adicionarAoCarrinho(produto)}>
              <ImCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProdutos;
