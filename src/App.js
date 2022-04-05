import logo from './logo.svg';
import './App.css';
import Drawer from './Componentes/Components'
import {Router } from '@mui/icons-material';
import { Switch } from '@mui/material';
import {Home, About} from "./Funciones/Routes"


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Rojo
        </p>
        <Drawer/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a>
        {/* <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router> */}
      </header>
    </div>
  );
}

export default App;
