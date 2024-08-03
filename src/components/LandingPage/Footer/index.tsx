import Image from "next/image";
import token from "../../../../styles/design-tokens";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer} id={"footer"}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "12fr",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <Image
            src={"/fintaxSafe/image/logo_claro.png"}
            alt="Logo claro"
            width="62"
            height="62"
            priority
          />
          <div style={{ marginTop: "20px" }}>
            Entre em contato conosco e solicite e emissão por videoconferência
            ou presencial
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          color: token.color.terciary,
        }}
      >
        <span>
          Rua das Ruas, nº 4, Sala 6 - Centro. Pouso Alegre/MG. CEP: 37555-000
          Contato: 0800 088 0888 CNPJ: 33.333.333/0003-33
        </span>
      </div>
    </footer>
  );
};

export default Footer;
