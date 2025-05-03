/* eslint-disable no-console */
import React from 'react';
import HongKong2025 from '../../media/ETH-HKG-ICL-2025.pdf';
import KCL2025 from '../../media/KCL-RobustRL-2025.pdf';
import UConn2024 from '../../media/UConn-RobustRL-2024.pdf';
import MathFinIIT2024 from '../../media/IIT-MathFin-RobustRL-2024.pdf';
import Aussois2024 from '../../media/Aussois_2024_RobustRL.pdf';
import STATQAM2024 from '../../media/STATQAM_2024_RLDynamic.pdf';
import SIAM2023 from '../../media/SIAM_2023_RobustRL.pdf';
import SIAGFMEPrize from '../../media/SIAGFMEPrize_2023.pdf';
import Informs2022 from '../../media/Informs_2022_RLDynamicRisk.pdf';
import Bachelier2022 from '../../media/BFS_2022_RLDynamicRisk.pdf';
import OMI2022Workshop from '../../media/OMIWorkshop_2022_ElicitableRL.pdf';
import SIAM2021 from '../../media/SIAM_2021_RLDynamicConvexRisk.pdf';

import GradResearchDay2023 from '../../media/GraduateResearchDay_2023_RLDynamic.pdf';
import OMI2022Visitor from '../../media/OMIVisitor_2022_RLDynamicConvex.pdf';
import UofTML2021_Distillation from '../../media/UofTML_2021_DistillingPD.pdf';
import ActSciMafi2021 from '../../media/ActSciMafi_2021_RiskSensitiveRL.pdf';
import SSC2019 from '../../media/SSC_2019_StochAlgoPortfolio.pdf';

import FieldsCFI2023 from '../../media/Fields_CFI2023_poster.pdf';
import UofTML2021_Blair from '../../media/UofTML_2021_UncertaintyDeepQ.pdf';
import BioStat2018 from '../../media/BioStats_2018_AdjustedRsquared.pdf';
import SSC2018 from '../../media/SSC_2018_TEDtalks.pdf';
import SSC2017 from '../../media/SSC_2017_FluView.pdf';
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
              <i>ETH - Hong Kong - Imperial Mathematical Finance Workshop, Hong Kong.</i> (Apr. 24, 2025)
              Optimal Trading Across Coexisting Exchanges: LOBs and AMMs.
                [<a href={HongKong2025}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>King's College London Mathematical Finance Seminar, London.</i> (Feb. 3, 2025)
              Robust Reinforcement Learning for Dynamic Distortion Risk Measures.
                [<a href={KCL2025}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Control and Optimization Seminar at University of Connecticut, online.</i> (Nov. 4, 2024)
              Robust Reinforcement Learning for Dynamic Distortion Risk Measures.
                [<a href={UConn2024}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Mathematical Finance Seminar at Illinois Institute of Technology, online.</i> (Oct. 15, 2024)
              Robust Reinforcement Learning for Dynamic Distortion Risk Measures.
                [<a href={MathFinIIT2024}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Mathematical Insights from Markets, Control and Learning, Aussois.</i> (Sep. 26, 2024)
              Robust Reinforcement Learning for Dynamic Distortion Risk Measures.
                [<a href={Aussois2024}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>STATQAM Seminar, Montréal.</i> (Feb. 15, 2024)
              Une introduction à l’apprentissage par renforcement sensible au risque avec des mesures de risque dynamiques.
                [<a href={STATQAM2024}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAM Conference on Financial Mathematics and Engineering, Philadelphia.</i> (June 9, 2023)
              Robust Reinforcement Learning for Dynamic Risk Measures.
                [<a href={SIAM2023}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAG/FME Conference Paper Prize Session, Philadelphia.</i> (June 9, 2023)
              Conditionally Elicitable Dynamic Risk Measures for Deep Reinforcement Learning.
                [<a href={SIAGFMEPrize}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>INFORMS Annual Meeting, Indianapolis.</i> (Oct. 18, 2022)
              Reinforcement Learning with Dynamic Risk Measures.
                [<a href={Informs2022}>Slides</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>11th World Congress of the Bachelier Finance Society, online.</i> (June 15, 2022)
              Reinforcement Learning for Dynamic Risk Measures.    [
                <a href={Bachelier2022}>Slides</a>
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
                <a href={OMI2022Workshop}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAM Conference on Financial Mathematics and Engineering, online.</i> (June 1, 2021)
              Reinforcement Learning with Dynamic Convex Risk Measures.    [
                <a href={SIAM2021}>Slides</a>
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
            <i>Fields-CFI Conference on Recent Advances in Mathematical Finance and Insurance, Toronto.</i> (Sep. 25, 2023)
              Robust Reinforcement Learning for Dynamic Risk Measures.     [
                <a href={FieldsCFI2023} target="_blank" rel="noreferrer">Poster</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT Statistics Graduate Student Research Day, Toronto.</i> (Apr. 27, 2023)
              An Introduction to Risk-Aware RL with Dynamic Risk Measures.    [
                <a href={GradResearchDay2023}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Oxford-Man Institute Visitor Presentations, Oxford.</i> (Mar. 11, 2022)
              Reinforcement Learning with Dynamic Convex Risk Measures.     [
                <a href={OMI2022Visitor}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT Research Topics in Statistical Machine Learning, online.</i> (Avr. 14, 2021)
              Methods for Adding Explicit Uncertainty to Deep Q-Learning. (with B. Bilodeau) [
                <a href={UofTML2021_Blair} target="_blank" rel="noreferrer">Report</a>
                ] [
                <a href="https://github.com/acoache/sta4273-final-project" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT ACTSCI / MAFI Research Retreat, Prince Edward County.</i> (Aug. 11, 2021)
              Risk-Sensitive Reinforcement Learning with Dynamic Risk Measures.    [
                <a href={ActSciMafi2021}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT Research Topics in Statistical Machine Learning, online.</i> (Mar. 18, 2021)
              Distilling Policy Distillation.     [
                <a href={UofTML2021_Distillation}>Slides</a>
                ] [
                <a href="https://github.com/acoache/distilling-policy-distillation">Code notebook</a>
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
                <a href={SSC2019}>Slides</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
            <i>McGill (Bio)Statistics Research Day, Montréal.</i> (Sep. 2018)
              The Significance of the Adjusted R Squared. (with O. Binette)  [
                <a href={BioStat2018} target="_blank" rel="noreferrer">Poster</a>
                ] [
                <a href="https://olivierbinette.github.io/posts/2020-11-15-the-significance-of-the-adjusted-r-squared-coefficient/" target="_blank" rel="noreferrer">Blog</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
            <i>Annual Meeting of the SSC, Montréal.</i> (June 4, 2018) “Do schools kill creativity?” Well, they help analyze
              popularity! (with F. Larose) [
                <a href={SSC2018} target="_blank" rel="noreferrer">Poster</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Séminaire étudiant de probabilités et statistique de l'UQAM, Montréal.</i> (July 13, 2017)
              Estimation non-paramétrique de la fonction quantile.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
            <i>Annual Meeting of the SSC, Winnipeg.</i> (June 12, 2017)
              Comparison of surveillance flu data across regions. (presented by R. Ferland & S. Froda) [
                <a href={SSC2017} target="_blank" rel="noreferrer">Poster</a>
                ] [
                <a href="https://www.nature.com/articles/s41598-018-38292-x" target="_blank" rel="noreferrer">Paper</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Workshops</h4>
      <div className="workshops">
        <ul>
          <li>
            <p>
              Python Bootcamp for Masters of Financial insurance students at the University of Toronto.
              (Sept. 2022) [
                <a href="https://github.com/acoache/python-bootcamp-MFI">Github</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Matlab Bootcamp for Masters of Financial insurance students at the University of Toronto.
              (Jan. 2021 & 2022) [
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
