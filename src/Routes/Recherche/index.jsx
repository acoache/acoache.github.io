/* eslint-disable no-console */
import React from 'react';
import DocumentMeta from 'react-document-meta';
import './styles.scss';
import Menu from '../../components/Menu_fr';
import Publications from '../../components/Publications_fr';
import Presentations from '../../components/Presentations_fr';

function Research() {
  const mainStyle = 'francais';

  const title = 'Anthony Coache - Recherche';

  return (
    <div>
      <DocumentMeta title={title} />
      <Menu menu={Menu} />
      <div className={mainStyle}>
        <h2>Recherche</h2>
        <p>
          Vous trouverez ci-dessous mes affiches, les projets, et
          les présentations auxquelles j&apos;ai contribué.
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
