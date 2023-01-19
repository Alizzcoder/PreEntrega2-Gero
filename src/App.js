
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <NavBar/>
          <ItemListContainer greeting = "Bienvenid@ al e-Commerce"/>
      </header>
    </div>
  );
}

export default App;
