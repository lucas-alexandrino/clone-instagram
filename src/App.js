import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda';
import ConteudoCentral from './componentes/Centro/ConteudoCentral';

function App() {
  return (
    <>
      <Esquerda />

      <ConteudoCentral />
      
      <div className='conteudoLateralDireita'>
        {/* 
          Login
          SugestÃµes de amigos
          SugestÃµes de contas
          SugestÃµes de hashags
          SugestÃµes de locais
          SugestÃµes de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;