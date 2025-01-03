import React, { useState, useEffect } from 'react'; 
import Footer from "../components/Footer";
import Menu from "../components/menu";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("carrinho");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("carrinho", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("carrinhoAtualizado"));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantidade: Math.max(1, quantity) } : item
    );
    updateCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.quantidade * parseFloat(item.preco_diario), 0).toFixed(2);
  };

  return (
    <>
      <Menu />
      <section className="Cart-Page">
        <div className="container">
          <div className="cart-section">
            <h1>Seu Carrinho</h1>
            {cart.length > 0 ? (
              cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={`http://localhost:3001/api/files/`+item.foto} alt={item.nome} />
                  <div className="item-details">
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                    <p>R$ {parseFloat(item.preco_diario).toFixed(2)}</p>
                    <div className="quantity">
                      <label htmlFor={`quantity-${item.id}`}>Quantidade:</label>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        value={item.quantidade}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                      />
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remover</button>
                </div>
              ))
            ) : (
              <p>Seu carrinho está vazio.</p>
            )}
          </div>
          <div className="summary-section">
            <h2>Resumo</h2>
            <div className="summary-item">
              <p>Subtotal:</p>
              <p>R$ {calculateSubtotal()}</p>
            </div>
            <button className="continue-btn">Continuar Comprando</button>
            <button className="checkout-btn">Finalizar Compra</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
