import React from "react";
import styles from "./saleCard.module.css"
import Button from "../forms/button/button";

const SaleCard = ({discount, fullPreto, title, onAdd,children}) => {
  return (
    <div className={styles.saleCard}> 
      <div className={styles.info}>
     <img src={title} alt=""width={"300px"}height={"100"} />
        <h3>{children}</h3>
        <div className={styles.priceCard}>
    
      <div>
    
        <h4>R${(fullPreto- (fullPreto*discount/100)).toFixed(2)}</h4>
      </div>
      </div>
      <Button fullwidth onClick={onAdd}>adicione ao carrinho</Button>
      </div>
    </div>
  );
};


SaleCard.defaultProps={
    discount:"50",
    fullPreto:"89,90",
    title:"logo"
}

export default SaleCard;
