import './App.css'

import Relogio from './components/Relogio';
import imagem from './imagens/livro-react.png'

function App() {

  return (
    <div id='container'>

      <div id='main'>
        <div>
          <h1>Sorteio relâmpago!</h1>
          <p>
            Cadastre-se no formulário abaixo e concorra a um kit de livros 
            para aprender os fundamentos do Frontend e ReactJS
          </p>
          <p>Tempo para o final da promoção:</p>

          <Relogio />
        </div>
        
        <div>
          <img src={imagem} />
        </div>
      </div>

      
    </div>
  );
}

export default App;
