//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import { useState } from 'react'

function Card({ nombre, color }) {
  return (
    <div style={{ border: '1px solid #37BF21', width: '50%', padding: '20px', marginTop: '20px' }}>

      <p>Hola {nombre}!!!</p>
      <p>Sabemos que tu color favorito es el: {color}</p>
    </div>
  );
}

export default Card;

