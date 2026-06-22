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
          {/*<p>
            I am currently .......
          </p>*/}
          <p>
            {/*Prior to this, I was a Research Associate in the Mathematical Finance Section of the Department of Mathematics at
            <a href="https://www.imperial.ac.uk/mathematical-finance/" target="_blank" rel="noreferrer"> Imperial College London</a>, advised by <a href="</a>https://www.ma.imperial.ac.uk/~jmuhleka/" target="_blank" rel="noreferrer"> Prof. Johannes Muhle-Karbe</a>. My work there focused on quantitative risk management, optimization and market microstructure, with applications to trading and decision-making under uncertainty. I also supervised MSc research projects conducted with leading banks and hedge funds, including Morgan Stanley, Qube-RT and Deutsche Bank.*/} As a Research Associate in the Mathematical Finance Section of the Department of Mathematics at
            <a href="https://www.imperial.ac.uk/mathematical-finance/" target="_blank" rel="noreferrer"> Imperial College London</a>, advised by <a href="</a>https://www.ma.imperial.ac.uk/~jmuhleka/" target="_blank" rel="noreferrer"> Prof. Johannes Muhle-Karbe</a>, my work there focused on quantitative risk management, optimization and market microstructure, with applications to trading and decision-making under uncertainty. I also supervised MSc research projects conducted with leading banks and hedge funds, including Morgan Stanley, Qube-RT and Deutsche Bank.
          </p>
          <p>
            I received a PhD in Statistical Sciences at the <a href="https://www.statistics.utoronto.ca/" target="_blank" rel="noreferrer">University of Toronto </a>
            under the supervision of <a href="http://sebastian.statistics.utoronto.ca/" target="_blank" rel="noreferrer"> Prof. Sebastian Jaimungal</a>, and
            obtained M.Sc. and B.Sc. degrees in mathematics and statistics from the <a href="https://sciences.uqam.ca/statistique/" target="_blank" rel="noreferrer">Université du Québec à Montréal</a>.
            During my PhD, I developed decision-making algorithms to solve sequential control problems under time-consistent dynamic risk measures.
            Recognitions of my work include the University of Toronto's DoSS Doctoral Early Research Excellence Award, the
            <a href="https://www.siam.org/prizes-recognition/activity-group-prizes/detail/siag-fme-conference-paper-prize" target="_blank" rel="noreferrer"> SIAG/FME Conference Paper Prize</a>
            , and <a href="https://www.nserc-crsng.gc.ca/index_eng.asp" target="_blank" rel="noreferrer">NSERC </a>
            funding from the undergraduate to postdoctoral levels.
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
