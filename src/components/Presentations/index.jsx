/* eslint-disable no-console */
import React from 'react';
import RLDynamicConvexRisk from '../../media/RL-DynamicConvexRisk.pdf';
import OMIRLDynamicConvexRisk from '../../media/OMI2022_RLDynamicConvex.pdf';
import DynamicCVaRElicitability from '../../media/DynamicCVaR_ElicitableRL.pdf';
import Bachelier from '../../media/BFS2022-RLDynamicRisk.pdf';
import Informs from '../../media/Informs2022_RLDynamicRisk.pdf';
import GradResearchDay from '../../media/GraduateResearchDay_2023.pdf';
import SIAMRobustRL from '../../media/SIAM_RobustRL_2023.pdf';
import SIAMElicitablePrize from '../../media/SIAM_FMEPrize_2023.pdf';
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
              <i>SIAM Conference on Financial Mathematics and Engineering, Philadelphia.</i> (June 9, 2023)
              Robust Reinforcement Learning for Dynamic Risk Measures.
                [<a href={SIAMRobustRL}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAG/FME Conference Paper Prize Session, Philadelphia.</i> (June 9, 2023)
              Conditionally Elicitable Dynamic Risk Measures for Deep Reinforcement Learning.
                [<a href={SIAMElicitablePrize}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>INFORMS Annual Meeting, Indianapolis.</i> (Oct. 18, 2022)
              Reinforcement Learning with Dynamic Risk Measures.
                [<a href={Informs}>Slides</a>]
            </p>
          </li>
        </ul>
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
              <i>Statistics Graduate Student Research Day, University of Toronto.</i> (Apr. 27, 2023)
              An Introduction to Risk-Aware RL with Dynamic Risk Measures.    [
                <a href={GradResearchDay}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Oxford-Man Institute Visitor Presentations, Oxford.</i> (Mar. 11, 2022)
              Reinforcement Learning with Dynamic Convex Risk Measures.     [
                <a href={OMIRLDynamicConvexRisk}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Research Topics in Statistical Machine Learning, University of Toronto.</i> (Mar. 18, 2021)
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
              <i>ACTSCI / MAFI Research meeting, University of Toronto.</i> (Jan. 28, 2021)
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
              (Sept. 2022) <i>University of Toronto.</i>                  [
                <a href="https://github.com/acoache/python-bootcamp-MFI">Github</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Matlab Bootcamp for Masters of Financial insurance students.
              (Jan. 2021 & 2022) <i>University of Toronto.</i>                  [
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
