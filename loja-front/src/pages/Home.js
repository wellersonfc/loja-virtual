import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import CardProdutos from "../components/CardProdutos";
import Menu from "../components/menu";

const Home = () => {
  const [produtos, setProdutos] = useState([]); 
  const [searchParams] = useSearchParams(); 
  const busca = searchParams.get("busca");

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const url = busca
          ? `http://localhost:3001/api/produtos/busca/${encodeURIComponent(busca)}`
          : "http://localhost:3001/api/produtos";

        const response = await fetch(url);
        const data = await response.json();
        setProdutos(data); 
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      }
    };

    fetchProdutos();
  }, [busca]); 

  return (
    <>
      <Menu />
      <div className="body-content">
        <CardProdutos produtos={produtos} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
