import CartOption from "../cartOption/cartOption";
import Button from "../forms/button/button";
import styles from "./cartMenu.module.css";
import { cartState } from "../../atoms/cart";
import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import Swal from 'sweetalert2'
const CarMenu = ({ isOpen, onClose }) => {
  const handleClick = async()=>{
    const result = await fetch("comprado");
    Swal.fire({
      title: 'Compra Finalizada!',
      text: 'Obrigado pela preferencia',
      icon: 'success',
      confirmButtonText: 'OK',
    });

  }
  
  const [cart, setCart] = useRecoilState(cartState);
  const cartRef = useRef();

  useEffect(() => {
    
    const handleCloseCart = (e) => {
      if (isOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleCloseCart);
    return () => {
      document.removeEventListener("mousedown", handleCloseCart);
    };
  }, [isOpen, onClose]);
if(!isOpen) return null;

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };
  return (
    <div
      ref={cartRef}
      className={styles.menu}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.options}>
        {cart.length === 0 && <p>nenhum produto encontrado.</p>}
        {cart.map((cartIn, pos) => (
          <CartOption
            img={cartIn.img}
            title={cartIn.name}
            price={cartIn.price}
            key={`cart-info-${pos}`}
            onRemove={() => handleRemoveProduct(pos)}
          />
        ))}
      </div>
      <div className={styles.preco}>
        <h2>total</h2>
        <h2>
          R${" "}
          {cart
            .reduce((prev, current) => prev + current.price, 0)
            .toFixed(2)
            .replace(".", ",")}
        </h2>
      </div>

      <Button onClick={handleClick}  fullwidth>Finalizar Compra</Button>
    </div>
  );
};

export default CarMenu;
