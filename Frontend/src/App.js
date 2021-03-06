import React from "react";
import "./App.css";
import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import HomeScreen from "./telas/HomeScreen";
import ProductScreen from "./telas/ProductScreen";
import CartScreen from "./telas/CartScreen";
import SigninScreen from "./telas/SigninScreen";
import RegisterScreen from "./telas/RegisterScreen";
import { useSelector } from "react-redux";

function App() {
  let _isMenuOpen = false;

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const toggleMenu = () => {
    if (_isMenuOpen)
      document.querySelector(".sidebar").classList.remove("open");
    else 
      document.querySelector(".sidebar").classList.add("open");

    _isMenuOpen = !_isMenuOpen;
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={toggleMenu}>&#9776;</button>
            <Link to="/">natura</Link>
          </div>

          <div className="header-links">
            <a href="cart.html">Carrinho</a>
            {
              userInfo ? <Link to="/profile">Olá, {userInfo.name}!</Link> :
              <Link to="/signin">Entrar</Link>
            }
            
          </div>
        </header>
        <aside className="sidebar">
          <ul>
            <li className="menu-item">
              <a href="treinamento.html">Treinamento</a>
            </li>

            <li className="menu-item">
              <a href="natucoins.html">Natucoins</a>
            </li>

            <li className="menu-item">
              <a href="index.html">Ofertas</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <ul>
            <div className="content">
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/carrinho/:id?" component={CartScreen} />
              
            </div>
          </ul>
        </main>
        <footer className="footer">Todos direitos reservados</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
