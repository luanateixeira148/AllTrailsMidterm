import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotePage from "./pages/NotePage";
import Main from "./pages/main";

function App() {

  return (

    <Router>
      <div className="App">
        
        <Switch>
        
          <Route exact path="/">
            <Main />
          </Route>

          <Route path= "/note">
            <NotePage />
          </Route>
        
        </Switch>

      </div>
    </Router>
  );
}

export default App;