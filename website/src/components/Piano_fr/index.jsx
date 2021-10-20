import React from 'react';
import DocumentMeta from 'react-document-meta';
import './styles.scss';
import Menu from '../Menu_fr';
import pianoDescription from '../../static/pianoDescription_fr';

function Piano() {
  const mainStyle = 'francais';

  const title = 'Anthony Coache - Piano';

  return (
    <div>
      <DocumentMeta title={title} />
      <Menu menu={Menu} />
      <div className={mainStyle}>
        <h2>Piano</h2>
        <p>{pianoDescription}</p>
        <hr />
        <h2>Anthony Coache - CD (2011)</h2>
        <p>
          J’ai produit un album non commercialisé de douze chansons lorsque j’étais en secondaire 5.
          L’album inclut plusieurs reprises ainsi que deux compositions
        </p>
        <div className="music">
          <ul>
            St. Thomas (
            <i>
              Sonny Rollins
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/1_StThomas.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Georgia on my Mind (
            <i>
              Hoagy Carmichael
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/2_Georgia.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Quartet No. 2 Part. 2 (
            <i>
              Chick Corea
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/3_Quartet.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Le temps d’une chanson (
            <i>
              Claude Léveilée
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/4_TempsChanson.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Take Five (
            <i>
              Paul Desmond
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/5_TakeFive.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Bohemian Rhapsody (
            <i>
              Freddie Mercury
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/6_Bohemian.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Je pense encore à toi (
            <i>
              Sylvain Cossette & Claude Pineault
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/7_PenseEncoreToi.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            La danse du smatte (
            <i>
              Daniel Lavoie
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/8_DanseSmatte.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Come sail away (
            <i>
              Dennis DeYoung
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/9_ComeSailAway.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Nine (
            <i>
              Anthony Coache
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/10_Nine.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Réunion  (
            <i>
              Anthony Coache & Mingan Sauriol
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/11_Reunion.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
          <ul>
            Canon de Pachelbel en C (
            <i>
              Georges Winston
            </i>
            )
            <br />
            <audio
              controls
              src="https://anthonycoache.ca/media/12_Pachelbel.mp3"
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src="/media/examples/friday.vtt"
              />
              Sorry, your browser does not support embedded audio.
            </audio>
          </ul>
        </div>
        <hr />
        <h2>Band 2 Beat! (2009)</h2>
        <p>
          J’ai joué au Camp de Blues lors du Festival international de Jazz de Montréal en 2009
          lorsque j’avais 13 ans. Vous pouvez voir une
          <a href="http://www.campdeblues.com/final-show.aspx?annee=2009" target="_blank" rel="noreferrer"> performance </a>
          de notre groupe.
        </p>
        <video
          controls
          src="https://anthonycoache.ca/media/Band_2_Beat.mp4"
        >
          <track
            default
            kind="captions"
            srcLang="en"
            src="/media/examples/friday.vtt"
          />
          Sorry, your browser does not support embedded audio.
        </video>
      </div>
    </div>
  );
}

export default Piano;
