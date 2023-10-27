import styles from './tablet.module.css'
import Button from '../../componets/forms/button/button'
import Swal from 'sweetalert2'


const Tablet = () => {
    const handleClick = async()=>{
        const result = await fetch("comprado")
        Swal.fire({
          title: 'Cadastro feito com sucesso!',
          text: 'Aguarde o telefonema de confirmação',
          icon: 'success',
          confirmButtonText: 'OK',
        })}
       
    return (
    <div className={styles.tabel}> 
           <h2>ENTRE EM CONTATO</h2>
      <p>PASSE SUAS INFORMAÇÕES</p>
        <form action="">
<input type="text"name='Endereço' />
<br />
<input type="text"name='nome Do Pet'  />
<br />
<input type="text"name='Contato' />
<br />
<textarea name="" id="" cols="30" rows="10" placeholder="Alergia, pavor ou inndicação"></textarea>
<div className={styles.bit} ><Button onClick={handleClick}>cadastre</Button></div>
        </form>
    </div>
  )
}

export default Tablet
