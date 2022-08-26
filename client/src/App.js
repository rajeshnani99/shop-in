
import './App.css';
import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from 'react-redux';

import store from "../src/Redux/Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
     <Home/>
     </BrowserRouter>
      </Provider>
    
    </div>
  );
}

export default App;
