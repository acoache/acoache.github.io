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
import SeminarSTATQAM from '../../media/STATQAM_slides_2024.pdf';
import StochAlgo from '../../media/StochAlgo_Portfolio.pdf';
import DistillingPD from '../../media/Distilling_PD.pdf';
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
              <i>Séminaire de STATQAM, Montréal.</i> (15 févr. 2024)
              Une introduction à l’apprentissage par renforcement sensible au risque avec des mesures de risque dynamiques.
                [<a href={SeminarSTATQAM}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAM Conference on Financial Mathematics and Engineering, Philadelphie.</i> (9 juin 2023)
              Apprentissage robuste par renforcement pour mesures de risque dynamiques.
                [<a href={SIAMRobustRL}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAG/FME Conference Paper Prize Session, Philadelphie.</i> (9 juin 2023)
              Conditionally Elicitable Dynamic Risk Measures for Deep Reinforcement Learning.
                [<a href={SIAMElicitablePrize}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Congrès annuel INFORMS, Indianapolis.</i> (18 oct. 2022)
              Apprentissage par renforcement pour mesures de risque dynamiques.
                [<a href={Informs}>Diapos</a>]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>11e Congrès modial de la Bachelier Finance Society, en ligne.</i> (15 juin 2022)
              Apprentissage par renforcement pour mesures de risque dynamiques.    [
                <a href={Bachelier}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Oxford-Man Institute Workshop, Oxford.</i> (6 mai 2022)
              Optimisation de la CVaR dynamique sur des stratégies à l'aide de l'élicitabilité
              conditionnelle.    [
                <a href={DynamicCVaRElicitability}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>SIAM Conference on Financial Mathematics and Engineering, en ligne.</i> (1 juin 2021)
              Apprentissage par renforcement avec mesures de risque convexes et dynamiques.    [
                <a href={RLDynamicConvexRisk}>Diapos</a>
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
              <i>Statistics Graduate Student Research Day, University of Toronto.</i> (27 avril 2023)
              Introduction au risk-aware RL avec mesures de risque dynamiques.    [
                <a href={GradResearchDay}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Oxford-Man Institute Visitor Presentations, Oxford.</i> (11 mars 2022)
              Apprentissage par renforcement avec mesures de risque convexes et dynamiques.     [
                <a href={OMIRLDynamicConvexRisk}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Research Topics in Statistical Machine Learning, University of Toronto.</i> (18 mars 2021)
              Distiller la distillation de politiques.    [
                <a href={DistillingPD}>Diapos</a>
                ] [
                <a href="https://github.com/acoache/distilling-policy-distillation">Notebook Python</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Congrès de recherche ACTSCI / MAFI, University of Toronto.</i> (28 janv. 2021)
              Optimisation sensible au risque en apprentissage par renforcement.    [
                <a href={RiskSensitiveRL}>Diapos</a>
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
                <a href={StochAlgo}>Diapos</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <i>Séminaire étudiant de probabilités et statistique, Université du Québec à Montréal. </i>
              (13 juil. 2017) Estimation non-paramétrique de la fonction quantile.
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
