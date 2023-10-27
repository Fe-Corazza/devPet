import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={styles.fot}>
          <ol className={styles.qmso}>
           <h2> Sobre a Little Pet</h2>
            <li>Quem somos</li>
            <br />
            <li>Nossas lojas</li>
            <br />
            <li>Nossos sorteios</li>
            <br />
            <li>Diversidade e inclusão</li>
          </ol>
          <ol className={styles.qmso}>
           <h2>Dúvidas</h2>
            <li>Ajuda online</li>
            <br />

            <li>Política de Privacidade</li>
            <br />
            <li>Ouvidoria</li>
            <br />
            <li>Política de Entregas</li>
          </ol>
           <ol className={styles.qmso}>
          <h2>Serviços</h2>
            <li>Amigo Little</li>
            <br />
            <li>Retirar na Loja</li>
            <br />
            <li>Meu desconto</li>
            <br />
            <li>Assinatura</li>
          </ol> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
