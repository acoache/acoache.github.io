/* eslint-disable no-console */
import React from 'react';
import './styles.scss';

function Publications() {
  return (
    <div id="Publications">
      <h3>Publications</h3>
      <h4>Published and Accepted Papers</h4>
      <div className="papers">
        <ul>
          <li>
            <p>
              <b> A. Coache</b>, S. Jaimungal, & Á. Cartea. (2023)
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
      <h4>Preprints</h4>
      <div className="preprints">
        {/*<ul>
          <li>
            <p>
              <b> A. Coache</b>, & S. Jaimungal.
              Robust Reinforcement Learning with Dynamic Distortion Risk Measures.
                [
                <a href="XXXXXXX" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="XXXXXXX" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>*/}
        <ul>
          <li>
            <p>
              Z. Cheng, <b> A. Coache</b>, & S. Jaimungal.
              Eliciting Risk Aversion with Inverse Reinforcement Learning via Interactive Questioning.
                [
                <a href="https://doi.org/10.48550/arXiv.2308.08427" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="https://github.com/acoache/irl-for-risk-aversion" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>In progress</h4>
      <div className="progress">
        <ul>
          <li>
            <p>
              <b> A. Coache</b> & S. Jaimungal.
              Robust Reinforcement Learning with Dynamic Distortion Risk Measures.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Publications;
