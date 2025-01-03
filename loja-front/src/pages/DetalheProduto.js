import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/menu";
import { useSearchParams } from "react-router-dom";

const DetalheProduto = () => {
  const [searchParams] = useSearchParams(); 
  const idProduto = searchParams.get("id"); 
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (idProduto) {
      fetch(`http://localhost:3001/api/produtos/${idProduto}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar os dados do produto.");
          }
          return response.json();
        })
        .then((data) => {
          setProduto(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [idProduto]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

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

  return (
    <>
      <Menu />
      <section className="DetalheProduto-Page">
        <div className="product-detail-container">
          <div className="product-image">
            <img
                src={`http://localhost:3001/api/files/`+produto.foto}
                alt={produto.nome.trim()}
            />
          </div>
          <div className="product-info">
            <h1 className="product-title">{produto.nome.trim()}</h1>
            <p className="product-description">{produto.descricao}</p>
            <div className="rental-options">
              <h2>Preços de Aluguel</h2>
              <div className="price-option">
                <span>Diário: </span>
                <span>R$ {produto.preco_diario}</span>
              </div>
              <div className="price-option">
                <span>Semanal: </span>
                <span>R$ {produto.preco_semanal}</span>
              </div>
              <div className="price-option">
                <span>Quinzenal: </span>
                <span>R$ {produto.preco_quinzenal}</span>
              </div>
              <div className="price-option">
                <span>Mensal: </span>
                <span>R$ {produto.preco_mensal}</span>
              </div>
            </div>
            <button className="add-to-cart-btn" onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetalheProduto;
