import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productAction.js';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const api = 'https://fakestoreapi.com/products';

  const fetchData = async () => {
    const response = await axios.get(api).catch((err) => {
      console.log('Err', err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='ui container'>
     
        <div style={{ marginTop: '100px', display: "flex", justifyContent: "center" }}>
          <ProductComponent />
        </div>
    </div>
  );
};

export default ProductListing;
