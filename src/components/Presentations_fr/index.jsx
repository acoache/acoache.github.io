/* eslint-disable no-console */
import React from 'react';
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
      <h3>Présentations</h3>
      <h4>Présentations invitées</h4>
      <div className="Invited">
        <ul>
          <li>
            <p>
              <i>King's College London Mathematical Finance Seminar, Londres.</i> (3 fév. 2025)
              Robust Reinforcement Learning for Dynamic Distortion Risk Measures.
                [<a href={KCL2025}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Control and Optimization Seminar at University of Connecticut, online.</i> (4 nov. 2024)
              Robust Reinforcement Learning for Dynamic Risk Measures.
                [<a href={UConn2024}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Mathematical Finance Seminar at Illinois Institute of Technology, online.</i> (15 oct. 2024)
              Robust Reinforcement Learning for Dynamic Risk Measures.
                [<a href={MathFinIIT2024}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Mathematical Insights from Markets, Control and Learning, Aussois.</i> (26 sept. 2024)
              Robust Reinforcement Learning for Dynamic Distortion Risk Measures.
                [<a href={Aussois2024}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Séminaire de STATQAM, Montréal.</i> (15 févr. 2024)
              Une introduction à l’apprentissage par renforcement sensible au risque avec des mesures de risque dynamiques.
                [<a href={STATQAM2024}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAM Conference on Financial Mathematics and Engineering, Philadelphie.</i> (9 juin 2023)
              Robust Reinforcement Learning for Dynamic Risk Measures.
                [<a href={SIAM2023}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAG/FME Conference Paper Prize Session, Philadelphie.</i> (9 juin 2023)
              Conditionally Elicitable Dynamic Risk Measures for Deep Reinforcement Learning.
                [<a href={SIAGFMEPrize}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Congrès annuel INFORMS, Indianapolis.</i> (18 oct. 2022)
              Reinforcement Learning with Dynamic Risk Measures.
                [<a href={Informs2022}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>11e Congrès modial de la Bachelier Finance Society, en ligne.</i> (15 juin 2022)
              Reinforcement Learning for Dynamic Risk Measures.    [
                <a href={Bachelier2022}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Oxford-Man Institute Workshop, Oxford.</i> (6 mai 2022)
              Optimising a Dynamic Conditional Value-at-Risk over Policies using Conditional
              Elicitability.    [
                <a href={OMI2022Workshop}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAM Conference on Financial Mathematics and Engineering, en ligne.</i> (1 juin 2021)
              Reinforcement Learning with Dynamic Convex Risk Measures.    [
                <a href={SIAM2021}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Présentations contribuées</h4>
      <div className="contributed">
        <ul>
          <li>
            <p>
            <i>Fields-CFI Conference on Recent Advances in Mathematical Finance and Insurance, Toronto.</i> (25 sept. 2023)
            Robust Reinforcement Learning for Dynamic Risk Measures.     [
                <a href={FieldsCFI2023} target="_blank" rel="noreferrer">Affiche</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT Statistics Graduate Student Research Day, Toronto.</i> (27 avril 2023)
              An Introduction to Risk-Aware RL with Dynamic Risk Measures.    [
                <a href={GradResearchDay2023}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Oxford-Man Institute Visitor Presentations, Oxford.</i> (11 mars 2022)
              Reinforcement Learning with Dynamic Convex Risk Measures. [
                <a href={OMI2022Visitor}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT Research Topics in Statistical Machine Learning, en ligne.</i> (14 avril 2021)
              Methods for Adding Explicit Uncertainty to Deep Q-Learning. (avec B. Bilodeau) [
                <a href={UofTML2021_Blair} target="_blank" rel="noreferrer">Rapport</a>
                ] [
                <a href="https://github.com/acoache/sta4273-final-project" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT ACTSCI / MAFI Research Retreat, Prince Edward County.</i> (11 août 2021)
              Risk-Sensitive Reinforcement Learning with Dynamic Risk Measures.    [
                <a href={ActSciMafi2021}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>UofT Research Topics in Statistical Machine Learning, en ligne.</i> (18 mars 2021)
              Distilling Policy Distillation.    [
                <a href={UofTML2021_Distillation}>Diapos</a>
                ] [
                <a href="https://github.com/acoache/distilling-policy-distillation">Notebook Python</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Congrès annuel de la SSC, Calgary.</i> (27 mai 2019)
              Algorithmes stochastiques pour résoudre un problème d’optimisation multi-périodique
              de portefeuille basé sur un quantile.    [
                <a href={SSC2019}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
            <i>McGill (Bio)Statistics Research Day, Montréal.</i> (Sep. 2018)
              The Significance of the Adjusted R Squared. (avec O. Binette)  [
                <a href={BioStat2018} target="_blank" rel="noreferrer">Affiche</a>
                ] [
                <a href="https://olivierbinette.github.io/posts/2020-11-15-the-significance-of-the-adjusted-r-squared-coefficient/" target="_blank" rel="noreferrer">Blog</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
            <i>Congrès annuel de la SSC, Montréal.</i> (June 4, 2018) “Do schools kill creativity?” Well, they help analyze
              popularity! (avec F. Larose) [
                <a href={SSC2018} target="_blank" rel="noreferrer">Affiche</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Séminaire étudiant de probabilités et statistique de l'UQAM, Montréal. </i>
              (13 juil. 2017) Estimation non-paramétrique de la fonction quantile.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
            <i>Congrès annuel de la SSC, Winnipeg.</i> (June 12, 2017)
            Comparison of surveillance flu data across regions. (présenté par R. Ferland & S. Froda) [
                <a href={SSC2017} target="_blank" rel="noreferrer">Affiche</a>
                ] [
                <a href="https://www.nature.com/articles/s41598-018-38292-x" target="_blank" rel="noreferrer">Paper</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Ateliers</h4>
      <div className="workshops">
        <ul>
          <li>
            <p>
              Tutoriel Python pour étudiants du programme de maîtrise en assurance financière.
              (Sept. 2022) <i>University of Toronto.</i>    [
                <a href="https://github.com/acoache/python-bootcamp-MFI">Github</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              Tutoriel Matlab pour étudiants du programme de maîtrise en assurance financière.
              (Janv. 2021 & 2022) <i>University of Toronto.</i>    [
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
