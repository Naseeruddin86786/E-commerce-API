import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

import ProductCard from "../../components/ProductCard/ProductCard";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./styles.module.css";
import { cartContext } from '../../Routes';


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  const data = useContext(cartContext);

  function fetchProducts() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  if (loading) {
    return (
      <div className={styles.loader_container}>
        <Loader
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }

  const addToCart = product => {
    data.setCartItems([...data.cartItems, product]);
  }

  const renderProducts = () => {
    return products.map((product, idx, price, rating  ) =>  <ProductCard key={idx} product={product} price={price} rating={rating} addToCart={addToCart} />);
  }

    return (
      <div className={styles.container}>
       {renderProducts()}
      </div>
    );
  }
  
  export default Home;