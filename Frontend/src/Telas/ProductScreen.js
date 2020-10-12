import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {

    const[qnt, setQnt] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () =>{
      props.history.push("/carrinho/" + props.match.params.id + "?qnt=" + qnt);
  }

  return (
    <div>
      <div className="return-to-results">
        <Link to="/">Voltar</Link>
      </div>

      {loading ? (
        <div> Loading...</div>
      ) : error ? (
        <div> {error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product"></img>
          </div>

          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Preço: R$ {product.price}</li>
              <li>Status: {product.countInStock > 0? product.countInStock +" unidades" : "Indisponível"}</li>
              <li>
                Qnt:{" "}
                <select value = {qnt} onChange={(e) => {setQnt(e.target.value)}}>
                    {[...Array(product.countInStock).keys()].map(x => 
                        <option value={x+1}>{x+1}</option>
                    )}
                </select>
              </li>
              <li>
                  {product.countInStock > 0 &&
                    <button onClick={handleAddToCart} className="button">Adicionar ao Carrinho</button>
                  }
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
