/* eslint-disable no-console */
import React from 'react';
import DocumentMeta from 'react-document-meta';
import './styles.scss';
import Menu from '../../components/Menu';
import Publications from '../../components/Publications';
import Presentations from '../../components/Presentations';

function Research() {
  const mainStyle = 'english';

  const title = 'Anthony Coache - Research';

  return (
    <div>
      <DocumentMeta title={title} />
      <Menu menu={Menu} />
      <div className={mainStyle}>
        <h2>Research</h2>
        <p>
          Below you will find my published papers, project history, and presentations to which
          I have contributed.
        </p>
        <hr />
        <Publications publications={Publications} />
        <hr />
        <Presentations presentations={Presentations} />
      </div>
    </div>
  );
}

export default Research;
