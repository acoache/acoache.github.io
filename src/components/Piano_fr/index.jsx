import React from 'react';
import Footer from '../../components/Footer_fr';
import DocumentMeta from 'react-document-meta';
import { HashLink } from 'react-router-hash-link';
import './styles.scss';
import song1 from '../../media/1_StThomas.mp3';
import song2 from '../../media/2_Georgia.mp3';
import song3 from '../../media/3_Quartet.mp3';
import song4 from '../../media/4_TempsChanson.mp3';
import song5 from '../../media/5_TakeFive.mp3';
import song6 from '../../media/6_Bohemian.mp3';
import song7 from '../../media/7_PenseEncoreToi.mp3';
import song8 from '../../media/8_DanseSmatte.mp3';
import song9 from '../../media/9_ComeSailAway.mp3';
import song10 from '../../media/10_Nine.mp3';
import song11 from '../../media/11_Reunion.mp3';
import song12 from '../../media/12_Pachelbel.mp3';
import song13 from '../../media/13_YouAreTheReason.mp3';
import song14 from '../../media/14_WildEnough.mp3';
import song15 from '../../media/15_Il.mp3';
import song16 from '../../media/16_Erin.mp3';
import song17 from '../../media/17_SalutLesAmoureux.mp3';
import song18 from '../../media/18_AllOfMe.mp3';
import Band2Beat from '../../media/Band_2_Beat.mp4';
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
        <div className="piano_search">
          <HashLink to="/piano#EP2021">Anthony Coache - EP (2021)</HashLink>
          <HashLink to="/piano#CD2011">Anthony Coache - CD (2011)</HashLink>
          <HashLink to="/piano#Band2Beat">Band 2 Beat! (2009)</HashLink>
        </div>
        <h3 id="EP2021">Anthony Coache - EP (2021)</h3>
        <p>
          J’ai enregistré six chansons, dont une composition, pour l'anniversaire de me petite-amie.
        </p>
        <div className="music">
          <ul>
            You Are the Reason (
            <i>
              Calum Scott
            </i>
            )
            <br />
            <audio
              controls
              src={song13}
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
            Wild Enough (
            <i>
              Elina
            </i>
            )
            <br />
            <audio
              controls
              src={song14}
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
            Il (
            <i>
              Jean-Michel Blais
            </i>
            )
            <br />
            <audio
              controls
              src={song15}
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
            Erin (
            <i>
              Anthony Coache
            </i>
            )
            <br />
            <audio
              controls
              src={song16}
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
            Salut les amoureux (
            <i>
              Joe Dassin
            </i>
            )
            <br />
            <audio
              controls
              src={song17}
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
            All of Me (
            <i>
              John Legend
            </i>
            )
            <br />
            <audio
              controls
              src={song18}
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
        <h3 id="CD2011">Anthony Coache - CD (2011)</h3>
        <p>
          J’ai produit un album non commercialisé de douze chansons lorsque j’étais en secondaire 5.
          L’album inclut plusieurs reprises ainsi que deux compositions.
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
              src={song1}
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
              src={song2}
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
              src={song3}
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
              src={song4}
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
              src={song5}
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
              src={song6}
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
              Sylvain Cossette
            </i>
            )
            <br />
            <audio
              controls
              src={song7}
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
              src={song8}
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
              src={song9}
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
              src={song10}
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
              src={song11}
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
              src={song12}
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
        <h3 id="Band2Beat">Band 2 Beat! (2009)</h3>
        <p>
          J’ai joué au Camp de Blues lors du Festival international de Jazz de Montréal en 2009
          lorsque j’avais 13 ans. Vous pouvez voir une
          <a href="http://www.campdeblues.com/final-show.aspx?annee=2009" target="_blank" rel="noreferrer"> performance </a>
          de notre groupe.
        </p>
        <video
          controls
          src={Band2Beat}
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
      <Footer/>
    </div>
  );
}

export default Piano;
