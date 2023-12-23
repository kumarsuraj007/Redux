import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productAction";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId)
  const product = useSelector((state) => state.product);
  const { title, image, description, category, price } = product;
  const dispatch = useDispatch();
  console.log(product)

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => ("Err", err));
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProduct();
    dispatch(removeSelectedProducts())
  }, [productId]);

  return (
    <div style={{marginTop: "200px", display : "flex", justifyContent: "center"}}>
      {Object.keys(product).length === 0 ? (<div style={{fontSize: "50px"}}>....Loading</div>) : (
  <div
  className="ui card"
  style={{
    marginTop: "0px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  }}
>
  
  <img
    src={image}
    alt={title}
    className="ui small image"
    style={{ height: "200px", width: "200px", objectFit: "contain" }}
  />
  <div className="content">
    <div className="header">{title}</div>
    <div className="meta">
      <span className="price">${price}</span>
    </div>
    <div className="meta category">{category}</div>
    <div className="meta category">{description}</div>

  </div>
  
</div>
      )}
    
    </div>
  );
};

export default ProductDetails;
