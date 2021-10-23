/* eslint-disable no-console */
import React from 'react';
import AdjustR2 from '../../media/Adjusted_Rsquared.pdf';
import TedTalks from '../../media/TEDtalks.pdf';
import FluView from '../../media/FluView.pdf';
import './styles.scss';

function Publications() {
  return (
    <div id="Publications">
      <h3>Publications</h3>
      <h4>Posters</h4>
      <div className="posters">
        <ul>
          <li>
            <p>
              Binette, O. &
              <b> Coache, A. </b>
              The Significance of the Adjusted R Squared.
              (Bio)Statistics Research Day, Montréal. September 21, 2018.
              <p>
                [
                <a href={AdjustR2} target="_blank" rel="noreferrer">Poster</a>
                ] [
                <a href="https://olivierbinette.github.io/posts/2020-11-15-the-significance-of-the-adjusted-r-squared-coefficient/" target="_blank" rel="noreferrer">Blog</a>
                ]
              </p>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <b>Coache, A. </b>
              & Larose, F. “Do schools kill creativity?” Well, they help analyze po
              pularity! Annual Meeting of the SSC, Montréal. June 4, 2018.
              <p>
                [
                <a href={TedTalks} target="_blank" rel="noreferrer">Poster</a>
                ] [
                <a href="https://github.com/acoache/knitr-poster-3colors" target="_blank" rel="noreferrer">Poster template</a>
                ]
              </p>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Ferland, R., Froda, S. &
              <b> Coache, A. </b>
              Comparison of surveillance flu data across
              regions. Annual Meeting of the SSC, Winnipeg. June 12, 2017.
              <p>
                [
                <a href={FluView} target="_blank" rel="noreferrer">Poster</a>
                ]
              </p>
            </p>
          </li>
        </ul>
      </div>
      <h4>Projects</h4>
      <div className="projects">
        <ul>
          <li>
            <p>
              Bilodeau, B. &
              <b> Coache, A. </b>
              Methods for Adding Explicit Uncertainty to Deep Q-Learning.
              Minimizing Expectations course, University of Toronto. April 14, 2021.
              <p>
                [
                <a href="https://github.com/acoache/sta4273-final-project" target="_blank" rel="noreferrer">GitHub repo</a>
                ]
              </p>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Publications;
