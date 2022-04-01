import { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {

  function handleButtonClick(){
    alert('Clicou no botão')
  }

  function sum(a,b){
    return a + b;
  }

  // Conceito de estado do component
  // Sempre que eu quiser algo na tela esteja reagindo ao
  // Comportamento da minha aplicação;
  // Isto é a base do React...
  // Reagir ao comportamento, eu tenho que criar um estado ou state

  const [contador, setContador ]= useState(0);

  // A função useState vai criar um state e vai retornar a variavel
  // Que vai retornar o estado(contador) e a função que vai alterar
  // Estado (setContador)
  // Sempre que Eu quiser mudar o valor e notificar o Frontend,
  // Chamo a função que vai alterar a variável...
  // Que vai ser devolvida para o Frontend
  // (Esta é a comunicação do State com o Frontend)

  // let contador = 0;
  function handleButtonContar(){
    // Contador = contador + 1;
    // contador++;
    setContador(contador+1);
  }

  return (
    <div className="App">
      <Header title ="Meu Primeiro Component React"/>
      <Header title ="Um Component com Props"/>
      <h2>
        Senac Campinas
        <div>Retorno da Soma:{sum(5,6)}</div>
      </h2>
      <button onClick={handleButtonClick}>Click Me!</button>
      <Header title={contador}/>
      <button onClick={handleButtonContar}>Contar</button>
    </div>
  );
}

export default App;
