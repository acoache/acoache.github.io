/* eslint-disable no-console */
import React from 'react';
import './styles.scss';

function Publications() {
  return (
    <div id="Publications">
      <h3>Publications</h3>
      <h4>Articles acceptés et publiés</h4>
      <div className="papers">
        <ul>
          <li>
            <p>
              <b> A. Coache</b>, & S. Jaimungal. (2025)
              Robust Reinforcement Learning with Dynamic Distortion Risk Measures. <b>SIAM J. Mathematics of Data Science</b>.
                [
                <a href="https://doi.org/10.1137/24M1699802" target="_blank" rel="noreferrer">SIMODS</a>
                ] [
                <a href="https://doi.org/10.48550/arXiv.2409.10096" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="https://github.com/acoache/RL-DynamicRobustRisk" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <b> A. Coache</b>, S. Jaimungal, & Á. Cartea. (2024)
              Conditionally Elicitable Dynamic Risk Measures for Deep Reinforcement Learning. <b>SIAM J. Financial Mathematics</b>.
                [
                <a href="https://doi.org/10.1137/22M1527209" target="_blank" rel="noreferrer">SIFIN</a>
                ] [
                <a href="http://dx.doi.org/10.2139/ssrn.4149461" target="_blank" rel="noreferrer">SSRN</a>
                ] [
                <a href="https://github.com/acoache/RL-ElicitableDynamicRisk" target="_blank" rel="noreferrer">Code</a>
                ] 
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <b> A. Coache</b> & S. Jaimungal. (2023)
              Reinforcement Learning with Dynamic Convex Risk Measures. <b>Mathematical Finance</b>.
                [
                <a href="https://doi.org/10.1111/mafi.12388" target="_blank" rel="noreferrer">MAFI</a>
                ] [
                <a href="https://doi.org/10.48550/arXiv.2112.13414" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="https://github.com/acoache/RL-DynamicConvexRisk" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Articles soumis</h4>
      <div className="preprints">
        <ul>
          <li>
            <p>
              Z. Cheng, <b> A. Coache</b>, & S. Jaimungal. (2025)
              Eliciting Risk Aversion with Inverse Reinforcement Learning via Interactive Questioning. <b>Révisé et resoumis à JMLR</b>.
                [
                <a href="https://doi.org/10.48550/arXiv.2308.08427" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="https://github.com/acoache/irl-for-risk-aversion" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              A. Capponi, <b> A. Coache</b>, & J. Muhle-Karbe. (2026)
              Optimal Trading in Automated Market Makers.
              [
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6145286" target="_blank" rel="noreferrer">SSRN</a>
              ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              M. Moghimi, <b> A. Coache</b>, & H. Ku. (2026)
              Decoupling Time and Risk: Multi-Horizon Risk-Sensitive Reinforcement Learning. <b>Soumis à ICML</b>.
              [
              <a href="https://doi.org/10.48550/arXiv.2602.04131" target="_blank" rel="noreferrer">arXiv</a>
              ] [
              <a href="https://anthonycoache.ca/" target="_blank" rel="noreferrer">Code</a>
              ]
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Publications;
