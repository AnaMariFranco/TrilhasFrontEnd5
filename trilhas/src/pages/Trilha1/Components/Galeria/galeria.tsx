import React from "react";
import "./galeria.css";

//Professora do céu, coloquei só exemplo de foto

const imagens = [
  "https://pic.photo/300/200?random=1",
  "https://pic.photo/300/200?random=2",
  "https://pic.photo/300/200?random=3",
  "https://pic.photo/300/200?random=4",
  "https://pic.photo/300/200?random=5",
  "https://pic.photo/300/200?random=6",
];

const Galeria: React.FC = () => {
  return (
    <div className="galeria">
      {imagens.map((imagem, index) => (
        <div key={index} className="imagem">
          <img src={imagem} alt={`Imagem ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Galeria;
