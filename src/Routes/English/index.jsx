/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/Footer';
import DocumentMeta from 'react-document-meta';
import headshot from '../../media/photo3.jpg';
import './styles.scss';
import Menu from '../../components/Menu';
import News from '../../components/News';

function Home() {
  const mainStyle = 'english';

  const title = 'Anthony Coache';

  return (
    <div>
      <DocumentMeta title={title} />
      <Menu menu={Menu} />
      <div className={mainStyle}>
        {/* <h2 className={`${mainStyle}__heading`}>Homepage</h2> */}
        <div className={`${mainStyle}__headshot`}>
          <img className={`${mainStyle}__img`} src={headshot} alt="Anthony Coache" />
        </div>
        <h2>About me</h2>
        <div className="bio">
          <p>
            I am currently a Research Assistant in the Mathematical Finance Section of the Department of Mathematics at
            <a href="https://www.imperial.ac.uk/mathematical-finance/" target="_blank" rel="noreferrer"> Imperial College London</a>.
          </p>
          <p>
            I received a PhD in Statistics at the <a href="https://www.statistics.utoronto.ca/" target="_blank" rel="noreferrer">University of Toronto </a>
            under the supervision of <a href="http://sebastian.statistics.utoronto.ca/" target="_blank" rel="noreferrer"> Prof. Sebastian Jaimungal</a>, and
            obtained a M.Sc. and B.Sc. with Honours in Mathematics with Concentration in Statistics from the <a href="https://sciences.uqam.ca/statistique/" target="_blank" rel="noreferrer">Université du Québec à Montréal</a>.
            Recognitions of my work include the University of Toronto’s DoSS Doctoral Early Research Excellence Award, the
            <a href="https://www.siam.org/prizes-recognition/activity-group-prizes/detail/siag-fme-conference-paper-prize" target="_blank" rel="noreferrer"> SIAG/FME Conference Paper Prize</a>
            , and <a href="https://www.nserc-crsng.gc.ca/index_eng.asp" target="_blank" rel="noreferrer">NSERC </a>
            funding at the undergraduate (USRA), master's (CGS-M), doctoral (CGS-D), and postdoctoral (PDF) levels.
          </p>
          <p>
          Throughout my studies, I have developed a strong background in mathematics and programming. Broadly, I am interested in multidisciplinary problems at the intersection of statistics and 
          computer science, which encompasses reinforcement learning, stochastic modeling, risk sensitivity, optimization, applied statistics, and statistical learning. 
          During my PhD, I developed decision-making algorithms to solve risk-sensitive control problems with time-consistent dynamic risk measures.
          </p>
        </div>
        <hr />
        <h2>News</h2>
        <News news={News} />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
