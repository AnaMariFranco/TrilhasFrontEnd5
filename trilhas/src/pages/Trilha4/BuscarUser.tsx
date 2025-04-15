import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const BuscarUser: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [usuario, setUser] = useState<User | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const buscarUser = async () => {
    if (!userId) {
      setErro('Por favor, digite um ID.');
      setUser(null);
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if (!response.ok) {
        throw new Error('Usuário não encontrado.');
      }

      const data: User = await response.json();
      setUser(data);
      setErro(null);
    } catch (err) {
      setErro((err as Error).message);
      setUser(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded bg-white mt-10">
      <h1 className="text-xl font-bold mb-4">Buscando Usuário pelo ID</h1>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Digite o ID do usuário"
        className="border p-2 w-full rounded mb-2"
      />
      <button
        onClick={buscarUser}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Buscar
      </button>

      {erro && <p className="text-red-600 mt-4">{erro}</p>}

      {usuario && (
        <div className="mt-4">
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarUser;