import React, { useState, useEffect } from "react";
import { ImCart, ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Menu = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCartCount(carrinho.length);
  }, []);

  useEffect(() => {
    const atualizarCarrinho = () => {
      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      setCartCount(carrinho.length);
    };
    window.addEventListener("carrinhoAtualizado", atualizarCarrinho);
    return () => {
      window.removeEventListener("carrinhoAtualizado", atualizarCarrinho);
    };
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/?busca=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="Menu-Componentes">
      <header className="">
        <div className="logo"><Link to={`/`}>MinhaLoja</Link></div>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <ImSearch />
          </button>
        </div>
        <div className="actions">
          <Link to={`/cart`}>
            <div className="cart">
              <ImCart />
              <span>{cartCount}</span> 
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Menu;
