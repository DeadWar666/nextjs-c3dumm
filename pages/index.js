import { useState } from 'react';
import Botao from '../component/botao/botao.js';
import style from './botao.module.css';

export default function Home() {
  const [value, setValue] = useState(0);

  function handleAddclick() {
    setValue(value + 1);
  }

  function downNumero() {
    setValue(value - 1);
  }

  return (
    <div>
      <div> Numero {value}</div>
      <br />
      <Botao text="ola mundo!" />
      <Botao text="ola mundo!" />
      <br />
      <button onClick={handleAddclick}> Adicionar</button> <br />
      <button onClick={downNumero}> Remover</button>
    </div>
  );
}
