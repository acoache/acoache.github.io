/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/Footer';
import DocumentMeta from 'react-document-meta';
import headshot from '../../media/photo2.jpg';
import bio from '../../static/bio';
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
          <p>{bio}</p>
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
