import './index.css';
import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'bootStrap', 'FireBase']

  return (
    <div className="App">
        <h1>Rederização De Lista</h1>
        <OutraLista itens={meusItens}/>
        <OutraLista itens={[]} />

    </div>
  );
}

export default App;
