import React from 'react';
import styles from './styles/profilecard.modeules.css';

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <img src="https://via.placeholder.com/150" alt="Perfil" className={styles.image} />
      <h2 className={styles.name}>Nome do Usuário</h2>
      <p className={styles.description}>Descrição breve sobre a pessoa.</p>
    </div>
  );
};

export default ProfileCard;
