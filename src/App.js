import './App.css';
import 'bulma/css/bulma.css'
import { Component } from "react";
import { Detail } from "./page/Detail"
import { Home } from "./page/Home"
import {Switch,Route} from 'react-router-dom'
import {NotFound} from './page/NotFound'
class App extends Component {
  render() {

  
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/detail/:movieId' component={Detail}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }

}

export default App;
