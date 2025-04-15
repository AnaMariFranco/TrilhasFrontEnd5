import { useParams } from "react-router-dom";

type AnimalParams = {
  name: string;
};

export default function Animal() {
  const { name } = useParams<AnimalParams>();

  return (
    <div>
      <h1>Detalhes do Animal</h1>
      {name ? (
        <p>
          Nome do animal: <strong>{name}</strong>
        </p>
      ) : (
        <p>Nome do animal não fornecido na URL</p>
      )}
    </div>
  );
}
