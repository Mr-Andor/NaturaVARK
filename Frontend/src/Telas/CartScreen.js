import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qnt = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qnt));
    }
  }, []);

  const checkoutHandler = () =>{
      props.history.push("/signin?redirect=shipping");
  }

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Carrinho de Compras</h3>
            <div>Preço</div>
          </li>
          {cartItems.length === 0 ? (
            <div>O carrinho está vazio!</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <Link to={"/product/" + item.product}>{item.name}</Link>
                  <div>
                    Qnt:
                    <select value={item.qnt} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {
                          [...Array(item.countInStock).keys()].map(x =>
                            <option key={x+1} value={x+1}>{x+1}</option>)
                      }
                    </select>
                    <button
                      type="button"
                      className="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
                <div className="cart-price">R$ {item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="cart-action">
        <h3>
          Subtotal ({Number(cartItems.reduce((a, c) => a + c.qnt, 0))} items) : R$
          {cartItems.reduce((a, c) => a + c.price * c.qnt, 0).toFixed(2)}
        </h3>
        <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
