import SaleCard from '../../componets/saleCard/saleCard'
import Subtitle from '../../componets/subtitle/subtitle'
import sprecialG from "../../assets/sprecialdoggrande.png"
import sprecialP from "../../assets/sprecialdogpequena.png"
import sprecialM from "../../assets/specialdogmedia.png"
import racaoGato from "../../assets/racaomaggat.png"
import racaoorigens from "../../assets/racaoorigens.png"
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cart";


import "../../App.css"

const Loja = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };
  return (
    <div>
     <div className="cont"> <Subtitle>Itens da nossa loja</Subtitle></div>
  <div className="conte"> 
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
        </SaleCard> </div>
     <div className="conte"> 

  
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
   </div>  <div className="conte"> 

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
     </div>
  )
}

export default Loja
