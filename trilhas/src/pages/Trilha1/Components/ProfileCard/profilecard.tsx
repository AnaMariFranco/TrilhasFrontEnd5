import React from "react";
import styles from "./profilecard.module.css";

interface ProfileCardProps {
  nome: string;
  descricao: string;
  imagemUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ nome, descricao, imagemUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imagemUrl} alt={nome} className={styles.avatar} />
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
};

export default ProfileCard;
