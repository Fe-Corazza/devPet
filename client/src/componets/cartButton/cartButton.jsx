
import styles from "./cartButton.module.css";
import { useState } from "react";
import logo from "../../assets/card.svg";


import { useRecoilValue } from "recoil";
import { cartState } from "../../atoms/cart";
import CarMenu from "../cartMenu/carMenu";


const CartButton = () => {
  const [open, setOpen] = useState(false);
  const cart = useRecoilValue(cartState);


  return (
    <div className={styles.cartButton} onClick={() => setOpen(!open)}>
      <img src={logo} alt="icone de carrinho de compra" width={"30"} />
      {cart.length > 0 && <div className={styles.number}>{cart.length}</div>}
      {open && <CarMenu isOpen={open} onClose={() =>setOpen(false)} />}
    </div>
  );
};


export default CartButton;



