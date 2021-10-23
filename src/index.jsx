import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import English from './Routes/English';
import Francais from './Routes/Francais';
import Piano from './components/Piano';
import PianoFr from './components/Piano_fr';
import Music from './components/Music';
import Musique from './components/Musique_fr';
import Research from './Routes/Research';
import Recherche from './Routes/Recherche';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={English} />
        <Route exact path="/Francais" component={Francais} />
        <Route exact path="/Research" component={Research} />
        <Route exact path="/Recherche" component={Recherche} />
        <Route exact path="/Piano" component={Piano} />
        <Route exact path="/Piano_fr" component={PianoFr} />
        <Route exact path="/Music" component={Music} />
        <Route exact path="/Musique_fr" component={Musique} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
