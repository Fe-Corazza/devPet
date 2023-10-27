import styles from "./Nav.module.css";
import logo from "../../assets/Group 1.png";

import dindin from "../../assets/dindin.png";

import banho from "../../assets/banho.svg";
import { Link } from "react-router-dom";
import loc from "../../assets/loc.svg";
import hear from "../../assets/coraçao.svg";
import CartButton from "../cartButton/cartButton";

const navigation = [
  { componente: "/loja", name: "Loja", img: "/src/assets/dindin.png" },
  { componente: "/banho", name: "Banho", img: "/src/assets/banho.svg" },
  {
    componente:
      "https://www.google.com.br/maps/@-22.3070511,-48.5476588,3a,75y,36.64h,75.83t/data=!3m6!1e1!3m4!1siwiyj80gmb7JlnM9oDk3Pw!2e0!7i16384!8i8192",
    name: "Localizacao",
    img: "/src/assets/loc.svg",
  },
  { componente: "/finaliz", name: "Contato", img: "/src/assets/tel.svg" },
];

// import CartButton from "../cartButton/cartButton";
const Nav = () => {
  return (
    <header>
      <div className={styles.bar}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={logo} alt="" width={"272"} />
          </Link>
        </div>
        <input type="text" placeholder="Buscar" />
        <div className={styles.nav}>
          {/* <CartButton/> */}
          <Link to="/finaliz">
            {" "}
            <h4>entre ou cadastre</h4>
          </Link>
          <CartButton />
          <img src={hear} alt="" />
        </div>
      </div>
      <div>
        <ul class={styles.iconesdocabeçalho}>
          {navigation.map((item) => (
            <li className={styles.lis}>
              <Link key={item.name} to={item.componente}>
                <img src={item.img} alt="" width={"20px"} /> {item.name}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
