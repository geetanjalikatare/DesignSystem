import './App.css';
import LoginPage from './components/LoginPage.js';
import HomePage from './components/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/home" component={HomePage}></Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
