import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import SongsPage from './Components/SongsPage';
import ProfilePage from './Components/ProfilePage';



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
      
      <Route path="/profile">
        <ProfilePage />
      </Route>
      
      <Route path="/album/:name">
        <SongsPage />
      </Route>
    </Switch>
   
    </div>
  );
}

export default App;
