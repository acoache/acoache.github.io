/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/Footer';
import DocumentMeta from 'react-document-meta';
import headshot from '../../media/photo2.jpg';
import interests from '../../static/researchInterests';
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
        <h2>PhD student in Statistics (UofT)</h2>
        <div className="bio">
          <p>
            I am currently a PhD candidate in Statistics at the University of Toronto (UofT) under the supervision of
            <a href="http://sebastian.statistics.utoronto.ca/" target="_blank" rel="noreferrer"> Prof. Sebastian Jaimungal</a>.
            I obtained a M.Sc. in Mathematics with Concentration in Statistics from the Université du Québec à Montréal (UQAM) in 2019
            advised by
            <a href="https://scholar.google.com/citations?user=3-OGWWMAAAAJ&hl=en" target="_blank" rel="noreferrer"> Prof. François Watier </a>
            and 
            <a href="http://www.labmath.uqam.ca/~ferland/" target="_blank" rel="noreferrer"> Prof. René Ferland</a>
            , and graduated with Honours from the B.Sc. in Mathematics with Concentration
            in Statistics from UQAM in 2017. I am a teaching assistant for statistics and mathematics courses and I was a private tutor for
            several mathematics courses.
          </p>
        </div>
        <hr />
        <h2>News</h2>
        <News news={News} />
        <hr />
        <h2>Research Interests</h2>
        <p>{interests}</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
