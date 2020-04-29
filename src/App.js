import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigator from './components/Navigator.js'
import Customerlist from './components/CustomerList'
import TrainingList from './components/TrainingList'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigator />
            <Switch>
              <Route exact path="/" component={Customerlist}/>
              <Route path="/trainings"component={TrainingList}/>
              <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
        </div>
      </ BrowserRouter>
    </div>
  );
}

export default App;
