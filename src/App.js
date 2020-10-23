import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import Navigazione from './components/Navigazione';
import Uploads from './components/Uploads';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      
      <Router>
      <header>
      <Navigazione />
      </header>
        {/** Configurazione Pagine */}
          <Switch>
          <Route exact path="/" component={Images} />
          <Route exact path="/uploads" component={Uploads} />
            {/* <Route exact path="/" component={Notes} />
            <Route component={Error} /> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
