/* eslint-disable no-console */
import React from 'react';
import './styles.scss';

function Publications() {
  return (
    <div>
      <h3>Publications</h3>
      <h4>Affiches</h4>
      <div className="posters">
        <li>
          <p>
            Binette, O. &
            <b> Coache, A. </b>
            The Significance of the Adjusted R Squared. (Bio)Statistics
            Research Day, Montréal. 21 september 2018. [
            <a href="https://anthonycoache.ca/media/Adjusted_Rsquared.pdf" target="_blank" rel="noreferrer">Affiche</a>
            ] [
            <a href="https://olivierbinette.github.io/posts/2020-11-15-the-significance-of-the-adjusted-r-squared-coefficient/" target="_blank" rel="noreferrer">Blogue</a>
            ]
          </p>
        </li>
        <li>
          <p>
            <b> Coache, A. </b>
            & Larose, F. “Do schools kill creativity?” Well, they help analyze
            popularity! Congrès annuel de la SSC, Montréal. 4 juin 2018. [
            <a href="https://anthonycoache.ca/media/TEDtalks.pdf" target="_blank" rel="noreferrer">Affiche</a>
            ] [
            <a href="https://github.com/acoache/knitr-poster-3colors" target="_blank" rel="noreferrer">Modèle d’affiche</a>
            ]
          </p>
        </li>
        <li>
          <p>
            Ferland, R., Froda, S. &
            <b> Coache, A. </b>
            Comparison of surveillance flu data across regions.
            Congrès annuel de la SSC, Winnipeg. 12 juin 2017. [
            <a href="https://anthonycoache.ca/media/FluView.pdf" target="_blank" rel="noreferrer">Affiche</a>
            ]
          </p>
        </li>
      </div>
      <h4>Projets</h4>
      <div className="projects">
        <li>
          <p>
            Bilodeau, B. &
            <b> Coache, A. </b>
            Methods for Adding Explicit Uncertainty to Deep Q-Learning.
            *Minimizing Expectations course, University of Toronto. 14 avril 2021.
            <p>
              [
              <a href="https://github.com/acoache/sta4273-final-project" target="_blank" rel="noreferrer">Dépôt GitHub</a>
              ]
            </p>
          </p>
        </li>
      </div>
    </div>
  );
}

export default Publications;
