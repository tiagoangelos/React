import './index.css';
import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const Url_foto = "https://img.icons8.com/?size=212&id=8M92DMPclyd9&format=png"
  const idade = 20

  return (
    <div className="App">
        <h3>REACT</h3>
        <List />
        <Frase />
        <SayMyName nome="joão"/>
        <Pessoa foto={Url_foto} nome="TIAGO" idade={idade} profissao="Estudante" />
    </div>
  );
}

export default App;
