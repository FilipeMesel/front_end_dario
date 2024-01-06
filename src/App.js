import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.get(
        'https://api-dario-nodejs.onrender.com/rx'
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Erro ao processar a solicitação');
    }
  };

  return (
    <div className="App">
      <h1>Exemplo de Requisição GET com Axios</h1>
      <button onClick={handleClick}>Fazer Requisição</button>
      <div>
        <p>Valor Recebido: {message}</p>
      </div>
    </div>
  );
}

export default App;
