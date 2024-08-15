import { useState } from 'react'
import Card from './Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setError('');
    setSubmitted(false);
    if (nombre.length < 3 || nombre.trimStart() !== nombre) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (color.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit} >
        <div style={{padding: '10px'}}>
          <label>Ingresa tu nombre: </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div style={{padding: '10px'}}>
          <label>Ingresa tu color favorito: </label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type="submit" style={{width: '20%' ,margin: '10px', backgroundColor: '#0373C7', color: 'white'}}>Enviar</button>
      </form>

      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {submitted && <Card nombre={nombre} color={color} />}
    </div>
  );
}

export default App;
