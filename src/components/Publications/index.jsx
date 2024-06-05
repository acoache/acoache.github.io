/* eslint-disable no-console */
import React from 'react';
import RobustRL from '../../media/Fields_CFI2023_poster.pdf'
import AdjustR2 from '../../media/Adjusted_Rsquared.pdf';
import UncertaintyDeepQ from '../../media/UncertaintyDeepQ.pdf';
import TedTalks from '../../media/TEDtalks.pdf';
import FluView from '../../media/FluView.pdf';
import './styles.scss';

function Publications() {
  return (
    <div id="Publications">
      <h3>Publications</h3>
      <h4>Papers</h4>
      <div className="papers">
        {/*<ul>
          <li>
            <p>
              <b> A. Coache</b>, & S. Jaimungal.
              Robust Reinforcement Learning with Dynamic Distortion Risk Measures.
                [
                <a href="https://arxiv.org/abs/2308.08427" target="_blank" rel="noreferrer">arXiv</a>
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
                <a href="https://arxiv.org/abs/2308.08427" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="https://github.com/acoache/irl-for-risk-aversion" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <b> A. Coache</b>, S. Jaimungal, & Á. Cartea.
              Conditionally Elicitable Dynamic Risk Measures for Deep Reinforcement Learning.
                [
                <a href="https://epubs.siam.org/doi/10.1137/22M1527209" target="_blank" rel="noreferrer">SIFIN</a>
                ] [
                <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4149461" target="_blank" rel="noreferrer">SSRN</a>
                ] [
                <a href="https://github.com/acoache/RL-ElicitableDynamicRisk" target="_blank" rel="noreferrer">Code</a>
                ]  
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <b> A. Coache</b>, & S. Jaimungal.
              Reinforcement Learning with Dynamic Convex Risk Measures.
                [
                <a href="https://doi.org/10.1111/mafi.12388" target="_blank" rel="noreferrer">MAFI</a>
                ] [
                <a href="https://arxiv.org/abs/2112.13414" target="_blank" rel="noreferrer">arXiv</a>
                ] [
                <a href="https://github.com/acoache/RL-DynamicConvexRisk" target="_blank" rel="noreferrer">Code</a>
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
              <b> A. Coache</b>, & S. Jaimungal.
              Robust Reinforcement Learning with Dynamic Distortion Risk Measures.
            </p>
          </li>
        </ul>
      </div>
      <h4>Posters</h4>
      <div className="posters">
        <ul>
          <li>
            <p>
              <b> A. Coache</b>. (25 sept. 2023)
              Robust Reinforcement Learning with Dynamic Risk Measures. <i>Fields-CFI Conference on Recent Advances in Mathematical Finance and Insurance, Toronto.</i>    [
                <a href={RobustRL} target="_blank" rel="noreferrer">Poster</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              O. Binette, & <b> A. Coache</b>. (21 sept. 2018)
              The Significance of the Adjusted R Squared. <i>(Bio)Statistics Research Day, Montréal.</i>    [
                <a href={AdjustR2} target="_blank" rel="noreferrer">Poster</a>
                ] [
                <a href="https://olivierbinette.github.io/posts/2020-11-15-the-significance-of-the-adjusted-r-squared-coefficient/" target="_blank" rel="noreferrer">Blog</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <b> A. Coache</b>, & F. Larose. (4 juin 2018) “Do schools kill creativity?” Well, they help analyze
              popularity! <i>Annual Meeting of the SSC, Montréal.</i>    [
                <a href={TedTalks} target="_blank" rel="noreferrer">Poster</a>
                ]
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              R. Ferland, S. Froda, & <b> A. Coache</b>.  (12 juin 2017)
              Comparison of surveillance flu data across
              regions. <i>Annual Meeting of the SSC, Winnipeg.</i>    [
                <a href={FluView} target="_blank" rel="noreferrer">Poster</a>
                ] [
                <a href="https://www.nature.com/articles/s41598-018-38292-x" target="_blank" rel="noreferrer">Paper</a>
                ]
            </p>
          </li>
        </ul>
      </div>
      <h4>Projects</h4>
      <div className="projects">
        <ul>
          <li>
            <p>
              B. Bilodeau, & <b> A. Coache</b>. (14 avril 2021)
              Methods for Adding Explicit Uncertainty to Deep Q-Learning. <i>Minimizing Expectations course, University of Toronto.</i>    [
                <a href={UncertaintyDeepQ} target="_blank" rel="noreferrer">Report</a>
                ] [
                <a href="https://github.com/acoache/sta4273-final-project" target="_blank" rel="noreferrer">Code</a>
                ]
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Publications;
