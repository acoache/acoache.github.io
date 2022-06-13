/* eslint-disable no-console */
import React from 'react';
import RLDynamicConvexRisk from '../../media/RL-DynamicConvexRisk.pdf';
import DynamicCVaRElicitability from '../../media/DynamicCVaR_ElicitableRL.pdf';
import Bachelier from '../../media/BFS2022-RLDynamicRisk.pdf';
import Informs from '../../media/RL-DynamicConvexRisk.pdf';
import RiskSensitiveRL from '../../media/RiskSensitive_RL.pdf';
import StochAlgo from '../../media/StochAlgo_Portfolio.pdf';
import DistillingPD from '../../media/Distilling_PD.pdf';
import './styles.scss';

function Presentations() {
  return (
    <div className="presentations" id="Presentations">
      <h3>Presentations</h3>
      <h4>Invited Talks</h4>
      <div className="Invited">
        <ul>
          <li>
            <p>
              Reinforcement Learning for Dynamic Risk Measures.
              11th World Congress of the Bachelier Finance Society, Hong Kong. June 15, 2022.    [
                <a href={Bachelier}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Optimising a Dynamic Conditional Value-at-Risk over Policies using Conditional
              Elicitability. Oxford-Man Institute, Oxford. May 6, 2022.    [
                <a href={DynamicCVaRElicitability}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Reinforcement Learning with Dynamic Convex Risk Measures. SIAM Conference on
              Financial Mathematics and Engineering. June 1, 2021.    [
                <a href={RLDynamicConvexRisk}>Slides</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Contributed Talks</h4>
      <div className="contributed">
        <ul>
          <li>
            <p>
              Distilling Policy Distillation. Minimizing Expectations course, University of
              Toronto. March 18, 2021.    [
                <a href={DistillingPD}>Slides</a>
                ] [
                <a href="https://github.com/acoache/distilling-policy-distillation">Code notebook</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Risk-Sensitive Optimization in Reinforcement Learning. ACTSCI / MAFI
              Research meeting, University of Toronto. January 28, 2021.    [
                <a href={RiskSensitiveRL}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Stochastic Algorithms for Solving a Multi-period Quantile-Based
              Portfolio Optimization Problem. Annual Meeting of the SSC, Calgary. May 27, 2019.    [
                <a href={StochAlgo}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Non-Parametric Estimation of the Quantile Function. Probability and
              Statistics Student Seminar - Université du Québec à Montréal. July 13, 2017.
            </p>
          </li>
        </ul>
      </div>
      <h4>Workshops</h4>
      <div className="workshops">
        <ul>
          <li>
            <p>
              Python Bootcamp for Masters of Financial insurance students. University of Toronto.
              September 2022.    [
                <a href="https://github.com/acoache/python-bootcamp-MFI">Github</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Matlab Bootcamp for Masters of Financial insurance students. University of Toronto.
              January 2021 & 2022.    [
                <a href="https://github.com/acoache/matlab-bootcamp-MFI">Github</a>
                ]
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Presentations;
