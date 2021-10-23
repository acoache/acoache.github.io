import React from 'react';
import Footer from '../../components/Footer';
import DocumentMeta from 'react-document-meta';
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
import Band2Beat from '../../media/Band_2_Beat.mp4';
import Menu from '../Menu';
import pianoDescription from '../../static/pianoDescription';

function Piano() {
  const mainStyle = 'english';

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
          I produced a non-commercial album of twelve songs when I was in Secondary 5.
          It includes covers and two compositions.
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
        <h2>Band 2 Beat! (2009)</h2>
        <p>
          I played at the Blues Camp held during the 2009 Montreal International Jazz Festival when
          I was 13 years old. This is a
          <a href="http://www.campdeblues.com/final-show.aspx?annee=2009" target="_blank" rel="noreferrer"> live performance </a>
          of our band.
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
