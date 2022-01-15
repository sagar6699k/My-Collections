import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
        
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
