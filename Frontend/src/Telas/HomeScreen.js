import React from "react";
import data from "../data";
import { Link } from 'react-router-dom'; 

function HomeScreen(props) {
  return (
    <ul className="products">
      {data.products.map((product) => (
        <li>
          <div className="product">
            <Link to={'product/' + product._id}>
                <img className="product-image" src={product.image} alt="produto" />
            </Link>

            <div className="product-name">
                <Link to={'product/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-price">R${product.price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
