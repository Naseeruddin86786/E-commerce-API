import styles from "./styles.module.css"
import { useContext } from "react";
import { cartContext } from "../../Routes";
import ProductCard from "../../components/ProductCard/ProductCard";

function Cart() {

  const data = useContext( cartContext ); 

    return (
      <div>
        <h1>Add items </h1>
        {data.cartItems.map((product, idx) => <ProductCard key={idx} product={product}/>)}
      </div>
    );
  }
  
  export default Cart;