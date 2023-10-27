import SaleCard from "../componets/saleCard/saleCard";
import Subtitle from "../componets/subtitle/subtitle";
import { cartState } from "../atoms/cart";
import sprecialG from "../assets/sprecialdoggrande.png";
import sprecialP from "../assets/sprecialdogpequena.png";
import sprecialM from "../assets/specialdogmedia.png";
import racaoGato from "../assets/racaomaggat.png";
import { useRecoilState } from "recoil";
import vet from "../assets/veterinario.svg";
import ades from "../assets/adestramento.svg";
import wal from "../assets/dogwalker.svg";

import racaoorigens from "../assets/racaoorigens.png";
import te from "../assets/saude-animal-1.jpg";
import banho from "../assets/banhoetosalogo.svg";
import Btns from "../componets/btns/btns";

import { Link } from "react-router-dom";
const Homes = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };

  return (
    <div>
      <img className="imgfund" src={te} alt="" />
      <div className="subt">
        <Subtitle>Produtos para você:</Subtitle>
      </div>
      <div className="container">
        <SaleCard
          fullPreto={54}
          title={racaoorigens}
          onAdd={() =>
            handleAddProduct({
              name: " Ração adulto Origens",
              price: 27,
              img: "racaoorigens.png",
            })
          }
        >
          Ração adulto Origens
        </SaleCard>
        <SaleCard
          fullPreto={64}
          title={sprecialG}
          onAdd={() =>
            handleAddProduct({
              name: "Special Dog Grande",
              price: 32,
              img: "sprecialdoggrande.png",
            })
          }
        >
          Special Dog Grande
        </SaleCard>
        <SaleCard
          fullPreto={94}
          title={sprecialP}
          onAdd={() =>
            handleAddProduct({
              name: "Special Dog Pequena",
              price: 47,
              img: "sprecialdogpequena.png",
            })
          }
        >
          Special Dog Pequena
        </SaleCard>
        <SaleCard
          fullPreto={34}
          title={sprecialM}
          onAdd={() =>
            handleAddProduct({
              name: "Special Dog Média",
              price: 17,
              img: "specialdogmedia.png",
            })
          }
        >
          Special Dog Média
        </SaleCard>
        <SaleCard
          fullPreto={74}
          title={racaoGato}
          onAdd={() =>
            handleAddProduct({
              name: "Ração de Gato",
              price: 37,
              img: "racaomaggat.png",
            })
          }
        >
          Ração de Gato
        </SaleCard>
      </div>
      <div className="containeres">
        <Btns link={"/finaliz"} img={banho}>
          banho & tosa
        </Btns>
        <Btns link={"/finaliz"} img={vet}>
          Veterinario
        </Btns>
        <Btns link={"/finaliz"} img={ades}>
          Adestramento
        </Btns>
        <Btns link={"/finaliz"} img={wal}>
          Dog walker
        </Btns>
      </div>
    </div>
  );
};

export default Homes;
