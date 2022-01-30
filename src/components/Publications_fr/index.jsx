/* eslint-disable no-console */
import React from 'react';
import AdjustR2 from '../../media/Adjusted_Rsquared.pdf';
import UncertaintyDeepQ from '../../media/UncertaintyDeepQ.pdf';
import TedTalks from '../../media/TEDtalks.pdf';
import FluView from '../../media/FluView.pdf';
import './styles.scss';

function Publications() {
  return (
    <div id="Publications">
      <h3>Publications</h3>
      <h4>Articles</h4>
      <div className="papers">
        <ul>
          <li>
            <p>
              <b> Coache, A. </b> & Jaimungal, S.
              Reinforcement Learning with Dynamic Convex Risk Measures.
              Décembre 2021.    [
                <a href="https://arxiv.org/abs/2112.13414" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="https://github.com/acoache/RL-DynamicConvexRisk" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Affiches</h4>
      <div className="posters">
        <ul>
          <li>
            <p>
              Binette, O. &
              <b> Coache, A. </b>
              The Significance of the Adjusted R Squared. (Bio)Statistics
              Research Day, Montréal. 21 septembre 2018.    [
                <a href={AdjustR2} target="_blank" rel="noreferrer">Affiche</a>
                ] [
                <a href="https://olivierbinette.github.io/posts/2020-11-15-the-significance-of-the-adjusted-r-squared-coefficient/" target="_blank" rel="noreferrer">Blogue</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <b> Coache, A. </b>
              & Larose, F. “Do schools kill creativity?” Well, they help analyze
              popularity! Congrès annuel de la SSC, Montréal. 4 juin 2018.    [
                <a href={TedTalks} target="_blank" rel="noreferrer">Affiche</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Ferland, R., Froda, S. &
              <b> Coache, A. </b>
              Comparison of surveillance flu data across regions.
              Congrès annuel de la SSC, Winnipeg. 12 juin 2017.    [
                <a href={FluView} target="_blank" rel="noreferrer">Affiche</a>
                ] [
                <a href="https://www.nature.com/articles/s41598-018-38292-x" target="_blank" rel="noreferrer">Article</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Projets</h4>
      <div className="projects">
        <ul>
          <li>
            <p>
              Bilodeau, B. &
              <b> Coache, A. </b>
              Methods for Adding Explicit Uncertainty to Deep Q-Learning.
              Minimizing Expectations course, University of Toronto. 14 avril 2021.    [
                <a href={UncertaintyDeepQ} target="_blank" rel="noreferrer">Rapport</a>
                ] [
                <a href="https://github.com/acoache/sta4273-final-project" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Modèle Sweave/TeX pour création de diapositives et affiches en Beamer.    [
                <a href="https://github.com/acoache/knitr-beamer-3colors" target="_blank" rel="noreferrer">Diapos</a>
                ] [
                <a href="https://github.com/acoache/knitr-poster-3colors" target="_blank" rel="noreferrer">Affiche</a>
                ]
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Publications;
