/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/Footer_fr';
import DocumentMeta from 'react-document-meta';
import headshot from '../../media/photo3.jpg';
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
        <h2>À propos de moi</h2>
        <div className="bio">
          <p>
            Je suis présentement un associé de recherche dans le groupe de mathématiques financières du département de mathématiques à
            <a href="https://www.imperial.ac.uk/mathematical-finance/" target="_blank" rel="noreferrer"> Imperial College London</a>.
          </p>
          <p>
            J'ai reçu un doctorat en statistique à <a href="https://www.statistics.utoronto.ca/" target="_blank" rel="noreferrer">l'Université de Toronto </a>
            sous la supervision de <a href="http://sebastian.statistics.utoronto.ca/" target="_blank" rel="noreferrer"> Prof. Sebastian Jaimungal</a>, et
            obtenu un M.Sc. et B.Sc. avec mention d'honneur en mathématiques, concentration statistique, de <a href="https://sciences.uqam.ca/statistique/" target="_blank" rel="noreferrer">l'Université du Québec à Montréal</a>.
            Mes travaux ont été récompensés notamment par le prix d'excellence pour la recherche doctorale du DoSS de l'Université de Toronto, le
            <a href="https://www.siam.org/prizes-recognition/activity-group-prizes/detail/siag-fme-conference-paper-prize" target="_blank" rel="noreferrer"> SIAG/FME Conference Paper Prize</a>
            , et un financement du <a href="https://www.nserc-crsng.gc.ca/index_eng.asp" target="_blank" rel="noreferrer">CRSNG </a>
            au premier cycle (BRPC), à la maîtrise (BESC-M), au doctorat (BESC-D), et au post-doctorat (BP).
          </p>
          <p>
          Tout au long de mes études, j'ai acquis une très forte connaissance des mathématiques et de la programmation. De manière générale, je m'intéresse
          aux problèmes multidisciplinaires à l'intersection de la statistique et de l'informatique, ce qui englobe l'apprentissage par renforcement,
          la modélisation stochastique, la sensitivité au risque, l'optimisation, la statistique appliquée et l'apprentissage statistique. 
          Au cours de mon doctorat, j'ai développé des algorithmes de prise de décision pour résoudre des problèmes de contrôle sensibles au risque 
          avec des mesures de risque dynamiques cohérentes dans le temps.
          </p>
        </div>
        <hr />
        <h2>Actualités</h2>
        <News news={News} />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
