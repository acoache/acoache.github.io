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
              <i>11th World Congress of the Bachelier Finance Society, online.</i> (June 15, 2022)
              Reinforcement Learning for Dynamic Risk Measures.    [
                <a href={Bachelier}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Oxford-Man Institute Workshop, Oxford.</i> (May 6, 2022)
              Optimising a Dynamic Conditional Value-at-Risk over Policies using Conditional
              Elicitability.     [
                <a href={DynamicCVaRElicitability}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAM Conference on Financial Mathematics and Engineering, online.</i> (June 1, 2021)
              Reinforcement Learning with Dynamic Convex Risk Measures.    [
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
              <i>Research Topics in Statistical Machine Learning, University of Toronto.</i> (March 18, 2021)
              Distilling Policy Distillation.     [
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
              <i>ACTSCI / MAFI Research meeting, University of Toronto.</i> (January 28, 2021)
              Risk-Sensitive Optimization in Reinforcement Learning.    [
                <a href={RiskSensitiveRL}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Annual Meeting of the SSC, Calgary.</i> (May 27, 2019)
              Stochastic Algorithms for Solving a Multi-period Quantile-Based
              Portfolio Optimization Problem.    [
                <a href={StochAlgo}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Probability and Statistics Student Seminar, Université du Québec à Montréal.</i> (July 13, 2017)
              Non-Parametric Estimation of the Quantile Function.
            </p>
          </li>
        </ul>
      </div>
      <h4>Workshops</h4>
      <div className="workshops">
        <ul>
          <li>
            <p>
              Python Bootcamp for Masters of Financial insurance students.
              (September 2022) <i>University of Toronto.</i>                  [
                <a href="https://github.com/acoache/python-bootcamp-MFI">Github</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Matlab Bootcamp for Masters of Financial insurance students.
              (January 2021 & 2022) <i>University of Toronto.</i>                  [
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
