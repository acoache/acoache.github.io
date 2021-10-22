import English from '../src/Routes/English';
import Francais from '../src/Routes/Francais';
import Research from '../src/Routes/Research';
import Recherche from '../src/Routes/Recherche';
import Piano from './components/Piano';
import PianoFR from './components/Piano_fr';
import Music from './components/Music';
import MusiqueFR from './components/Musique_fr';
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './index.css';
import "./styles.css";

function App() {
return (
    <HashRouter basename='/'>
        <div>
        <ul>
        <li><Link to="/">English</Link></li>
        <li><Link to="/Francais">Francais</Link></li>
        <li><Link to="/Research">Research</Link></li>
        <li><Link to="Recherche">Recherche</Link></li>
        <li><Link to="Piano">Piano</Link></li>
        <li><Link to="Piano_fr">Piano</Link></li>
        <li><Link to="Music">Music</Link></li>
        <li><Link to="Musique_fr">Musique</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={English} />
        <Route exact path="/English" component={English} />
        <Route exact path="/Francais" component={Francais} />
        <Route exact path="/Research" component={Research} />
        <Route exact path="/Recherche" component={Recherche} />
        <Route exact path="/Piano" component={Piano} />
        <Route exact path="/Piano_fr" component={PianoFR} />
        <Route exact path="/Music" component={Music} />
        <Route exact path="/Musique_fr" component={MusiqueFR} />
        </div>
    </HashRouter>
);
}

export default App;