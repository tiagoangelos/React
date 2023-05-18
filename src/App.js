import './index.css';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const Url_foto = "https://img.icons8.com/?size=212&id=8M92DMPclyd9&format=png"
  const idade = 20

  return (
    <div className="App">
        <h1>REACT</h1>
        <Evento />
        <Form />

    </div>
  );
}

export default App;
