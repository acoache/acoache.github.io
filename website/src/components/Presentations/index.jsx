/* eslint-disable no-console */
import React from 'react';
import './styles.scss';

function Presentations() {
  return (
    <div className="presentations" id="Presentations">
      <h3>Presentations</h3>
      <h4>Invited Talks</h4>
      <div className="Invited">
        <li>
          <p>
            Reinforcement Learning with Dynamic Convex Risk Measures. SIAM Conference on
            Financial Mathematics and Engineering. June 1, 2021.
            <p>
              [
              <a href="https://anthonycoache.ca/media/RL-DynamicConvexRisk.pdf">Slides</a>
              ]
            </p>
          </p>
        </li>
      </div>
      <h4>Contributed Talks</h4>
      <div className="contributed">
        <li>
          <p>
            Distilling Policy Distillation. Minimizing Expectations course, University of
            Toronto. March 18, 2021.
            <p>
              [
              <a href="https://anthonycoache.ca/media/Distilling_PD.pdf">Slides</a>
              ] [
              <a href="https://github.com/acoache/distilling-policy-distillation">Code notebook</a>
              ]
            </p>
          </p>
        </li>
        <li>
          <p>
            Risk-Sensitive Optimization in Reinforcement Learning. ACTSCI / MAFI
            Research meeting, University of Toronto. January 28, 2021.
            <p>
              [
              <a href="https://anthonycoache.ca/media/RiskSensitive_RL.pdf">Slides</a>
              ] [
              <a href="https://github.com/acoache/knitr-beamer-3colors">Beamer template</a>
              ]
            </p>
          </p>
        </li>
        <li>
          <p>
            Stochastic Algorithms for Solving a Multi-period Quantile-Based
            Portfolio Optimization Problem. Annual Meeting of the SSC, Calgary. May 27, 2019.
            <p>
              [
              <a href="https://anthonycoache.ca/media/StochAlgo_Portfolio.pdf">Slides</a>
              ] [
              <a href="https://github.com/acoache/knitr-beamer-3colors">Beamer template</a>
              ]
            </p>
          </p>
        </li>
        <li>
          <p>
            Non-Parametric Estimation of the Quantile Function. Probability and
            Statistics Student Seminar - Université du Québec à Montréal. July 13, 2017.
          </p>
        </li>
      </div>
      <h4>Workshops</h4>
      <div className="workshops">
        <li>
          <p>
            Matlab Bootcamp for Masters of Financial insurance students. University of Toronto.
            January 6-7, 2021.
            <p>
              [
              <a href="https://github.com/acoache/matlab-bootcamp-MFI">GitHub repo</a>
              ]
            </p>
          </p>
        </li>
      </div>
    </div>
  );
}

export default Presentations;
