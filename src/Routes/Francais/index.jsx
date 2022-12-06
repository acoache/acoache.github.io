/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/Footer_fr';
import DocumentMeta from 'react-document-meta';
import headshot from '../../media/photo3.jpg';
import interests from '../../static/researchInterests_fr';
import './styles.scss';
import Menu from '../../components/Menu_fr';
import News from '../../components/News_fr';

function Home() {
  const mainStyle = 'francais';

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
        <h2>Étudiant au doctorat en statistique (UofT)</h2>
        <div className="bio">
          <p>
            Je suis présentement étudiant au doctorat en statistique à l’Université de Toronto (UofT) sous la supervision de
            <a href="http://sebastian.statistics.utoronto.ca/" target="_blank" rel="noreferrer"> Prof. Sebastian Jaimungal</a>.
            J’ai obtenu un M.Sc. en mathématiques, concentration en statistique de l’Université du Québec à Montréal (UQAM) en 2019 
            sous la supervision de
            <a href="https://scholar.google.com/citations?user=3-OGWWMAAAAJ&hl=en" target="_blank" rel="noreferrer"> Prof. François Watier </a>
            et
            <a href="http://www.labmath.uqam.ca/~ferland/" target="_blank" rel="noreferrer"> Prof. René Ferland</a>
            , et j’ai gradué avec mention d’honneur du B.Sc. en mathématiques,
            concentration en statistique de l’UQAM en 2017. Je suis démonstrateur pour plusieurs cours de statistique et de mathématiques et
            j’ai également été tuteur privé pour plusieurs cours de mathématiques.
          </p>
        </div>
        <hr />
        <h2>Actualités</h2>
        <News news={News} />
        <hr />
        <h2>Intérêts en recherche</h2>
        <p>{interests}</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
