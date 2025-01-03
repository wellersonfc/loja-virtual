import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });

  const navigate = useNavigate();

  // Função para alternar entre formulário de login e cadastro
  const toggleForm = () => setIsRegistering((prev) => !prev);

  // Função para lidar com mudanças nos campos de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isRegistering) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Função para realizar o cadastro
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro ao cadastrar. Tente novamente!');
      
      alert('Cadastro realizado com sucesso!');
      setIsRegistering(false);
    } catch (error) {
      alert(error.message);
    }
  };

  // Função para realizar o login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3001/api/login?email=${encodeURIComponent(loginData.email)}&senha=${encodeURIComponent(loginData.senha)}`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) throw new Error('Email ou senha inválidos.');
      
      const data = await response.json();
      // Armazenar dados do usuário no localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('usuario', JSON.stringify(data.usuario));

      alert('Login realizado com sucesso!');
      navigate('/cart');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="Page-Login">
      <div className="container">
        <div className="banner">
          <h1>Bem-vindo!</h1>
          <p>Entre ou cadastre-se para explorar nosso sistema.</p>
        </div>
        <div className="form-container">
          {isRegistering ? (
            <div className="form">
              <h2>Cadastro</h2>
              <form onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">Cadastrar</button>
              </form>
              <p>
                Já tem uma conta? <span onClick={toggleForm}>Entrar</span>
              </p>
            </div>
          ) : (
            <div className="form">
              <h2>Login</h2>
              <form onSubmit={handleLoginSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={loginData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={loginData.senha}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">Entrar</button>
              </form>
              <p>
                Não tem uma conta? <span onClick={toggleForm}>Cadastre-se</span>
              </p>
              <Link to={`/`}><p>Voltar para Loja</p></Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
