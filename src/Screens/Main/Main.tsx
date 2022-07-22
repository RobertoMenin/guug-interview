import React from "react";
import "./Main.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TELA MAIN</p>
        <p>
          Rota para bater a cada 1 minuto https://dev.guug.com.br/password/test
        </p>
        <p>
          A interface do porteiro deve ter uma opção com o botão aceitar e
          recusar cada visitante, ao clicar em ACEITAR o visitante deve ir para
          uma lista salvas em estados globais (SINGLETON, podendo utilizar o
          REDUX, RECOIL, JOTAI, ou qualquer outro gerenciador de estado global
          que estiver acostumado) e ao clicar em RECUSAR para uma outra lista
          iniciada em estado global.
        </p>
        <p>
          Usar React Navigation para navegar para os usuarios aceitos e usuarios
          recusados
        </p>
      </header>
    </div>
  );
}

export default App;
