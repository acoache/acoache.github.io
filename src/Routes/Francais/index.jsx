/* eslint-disable no-console */
import React from 'react';
import DocumentMeta from 'react-document-meta';
import headshot from '../../media/photo2.jpg';
import bio from '../../static/bio_fr';
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
          <p>{bio}</p>
        </div>
        <hr />
        <h2>Actualités</h2>
        <News news={News} />
        <hr />
        <h2>Intérêts en recherche</h2>
        <p>
          J’ai une très forte connaissance des mathématiques et de
          la programmation. Je suis intéressé aux problèmes multidisciplinaires
          à l’intersection de la statistique et de l’informatique. Plus
          particulièrement, mes intérêts en recherche se situent dans
          l’apprentissage par renforcement, la modélisation stochastique,
          l’optimisation, la statistique appliquée, l’apprentissage statistique et l’informatique.
        </p>
      </div>
    </div>
  );
}

export default Home;
