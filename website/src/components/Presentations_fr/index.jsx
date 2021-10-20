/* eslint-disable no-console */
import React from 'react';
import './styles.scss';

function Presentations() {
  return (
    <div className="presentations" id="Presentations">
      <h3>Présentations</h3>
      <h4>Présentations invitées</h4>
      <div className="Invited">
        <li>
          <p>
            Apprentissage par renforcement avec mesures de risque convexes et dynamiques.
            SIAM Conference on Financial Mathematics and Engineering. 1 juin 2021.
            <p>
              [
              <a href="https://anthonycoache.ca/media/RL-DynamicConvexRisk.pdf">Diapos</a>
              ]
            </p>
          </p>
        </li>
      </div>
      <h4>Présentations contribuées</h4>
      <div className="contributed">
        <li>
          <p>
            Distiller la distillation de politiques. Minimizing Expectations course, University of
            Toronto. 18 mars 2021.
            <p>
              [
              <a href="https://anthonycoache.ca/media/Distilling_PD.pdf">Diapos</a>
              ] [
              <a href="https://github.com/acoache/distilling-policy-distillation">Notebook Python</a>
              ]
            </p>
          </p>
        </li>
        <li>
          <p>
            Optimisation sensible au risque en apprentissage par renforcement.
            Congrès de recherche ACTSCI / MAFI, University of Toronto. 28 janvier 2021.
            <p>
              [
              <a href="https://anthonycoache.ca/media/RiskSensitive_RL.pdf">Diapos</a>
              ] [
              <a href="https://github.com/acoache/knitr-beamer-3colors">Modèle de Beamer</a>
              ]
            </p>
          </p>
        </li>
        <li>
          <p>
            Algorithmes stochastiques pour résoudre un problème d’optimisation multi-périodique
            de portefeuille basé sur un quantile. Congrès annuel de la SSC, Calgary. 27 mai 2019.
            <p>
              [
              <a href="https://anthonycoache.ca/media/StochAlgo_Portfolio.pdf">Diapos</a>
              ] [
              <a href="https://github.com/acoache/knitr-beamer-3colors">Modèle de Beamer</a>
              ]
            </p>
          </p>
        </li>
        <li>
          <p>
            Estimation non-paramétrique de la fonction quantile. Séminaire étudiant de probabilités
            et statistique - Université du Québec à Montréal. 13 juillet 2017.
          </p>
        </li>
      </div>
      <h4>Ateliers</h4>
      <div className="workshops">
        <li>
          <p>
            Tutoriel Matlab pour étudiants du programme de maîtrise en assurance financière.
            University of Toronto. 6-7 janvier 2021.
            <p>
              [
              <a href="https://github.com/acoache/matlab-bootcamp-MFI">Dépôt GitHub</a>
              ]
            </p>
          </p>
        </li>
      </div>
    </div>
  );
}

export default Presentations;