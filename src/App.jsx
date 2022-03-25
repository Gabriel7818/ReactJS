import './App.css';
import Header from './Header';

function App() {

  function handleButtonClick(){
    alert('Clickou no botão')
  }

  function sum(a,b){
    return a + b;
  }
  return (
    <>
      <Header tittle ="Meu Primeiro Component React"/>
      <Header tittle ="Um Component com Props"/>
      <h2>
        Senac Campinas
        <div>Retorno da Soma:{sum(5,6)}</div>
      </h2>
      <button onClick={handleButtonClick}>Click Me!</button>
    </>
  );
}

export default App;
