import React from 'react';
import Footer from '../../components/Footer';
import DocumentMeta from 'react-document-meta';
import { HashLink } from 'react-router-hash-link';
import './styles.scss';
import Menu from '../Menu';
import musicDescription from '../../static/musicDescription';

function Music() {
  const mainStyle = 'english';

  const title = 'Anthony Coache - Music';

  return (
    <div>
      <DocumentMeta title={title} />
      <Menu menu={Menu} />
      <div className={mainStyle}>
        <h2>Music</h2>
        <p>{musicDescription}</p>
        <hr />
        <div className="music_search">
          <HashLink to="/music#Spotify">Spotify Playlists</HashLink>
          <HashLink to="/music#EDM">EDM</HashLink>
          <HashLink to="/music#FolkPop">Folk / Pop</HashLink>
          <HashLink to="/music#FutureHouse">Future House</HashLink>
          <HashLink to="/music#IndieRock">Indie Rock</HashLink>
          <HashLink to="/music#Neoclassical">Neoclassical</HashLink>
          <HashLink to="/music#RBSoul">R&B / Soul</HashLink>
          <HashLink to="/music#TropicalHouse">Tropical House</HashLink>
          <HashLink to="/music#Misc">Misc</HashLink>
          <HashLink to="/music#Podcasts">Podcasts</HashLink> 
        </div>
        <h3 id="Spotify">Spotify Playlists</h3>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/playlist/4W90XSeFAJpTNHBAjOQngN" allowtransparency="true" allow="encrypted-media" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/playlist/6RCEqNxzFFWonxfXNjMWVA" allowtransparency="true" allow="encrypted-media" title="Music" frameBorder="0" />
        </div>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/playlist/1c68dfP3PB6PnGMgeaHzaJ" allowtransparency="true" allow="encrypted-media" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/playlist/2p9LXP3yPPq0o2HQQB0VmB" allowtransparency="true" allow="encrypted-media" title="Music" frameBorder="0" />
        </div>
        <h3 id="EDM">EDM</h3>
        <p>Avicii, Vicetone, Tritonal, Audien, Disco Fries, Lucas & Steve</p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/1vCWHaC5f2uS3yhpwWbIA6" title="EDM Music" allowtransparency="true" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/artist/0daugAjUgbJSqdlyYNwIbT" title="EDM Music" allowtransparency="true" frameBorder="0" />
          <iframe scrolling="no" allow="autoplay" title="Music" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/815594511&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true" frameBorder="no" />
        </div>
        <h3 id="FolkPop">Folk / Pop</h3>
        <p>Elina, Chelsea Cutler, Jeremy Zucker, Loote</p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/4K9OTkRXEFL6NDXFTqVmq9" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/album/16mjtcKPxpQ4ajFHmJ0hJC" allowtransparency="true" title="Music" frameBorder="0" />
        </div>
        <h3 id="FutureHouse">Future House</h3>
        <p>Brooks, RetroVision, Don Diablo, Mo Falk</p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/4mHAu7NX2UNsnGXjviBD9e" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/artist/6heMlLFM6RDDHRz99uKMqS" allowtransparency="true" title="Music" frameBorder="0" />
        </div>
        <h3 id="IndieRock">Indie Rock</h3>
        <p>Half Moon Run, Arkells, Milk & Bone, Walk Off The Earth</p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/3ceQN2NVlLg1hgTzljDE4n" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/artist/3ShGiAyhxI6Rq3TknZ3gfk" allowtransparency="true" title="Music" frameBorder="0" />
        </div>
        <h3 id="Neoclassical">Neoclassical</h3>
        <p>Alexandra Strélinski, Jean-Michel Blais, Ludovico Einaudi</p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/0HyM2wwUfOsZYD4Dj5IOOZ" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/artist/2uHlq6ERoXk8dqRZmq2OEr" allowtransparency="true" title="Music" frameBorder="0" />
        </div>
        <h3 id="RBSoul">R&B / Soul</h3>
        <p>Emotional Oranges</p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/12trz2INGglrKMzLmg0y2C" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/630938292&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true" title="Music" frameBorder="no" />
        </div>
        <h3 id="TropicalHouse">Tropical House</h3>
        <p>Sam Feldt, Gryffin, Sigala, Avocuddle, Kygo</p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/20gsENnposVs2I4rQ5kvrf" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/artist/2ZRQcIgzPCVaT9XKhXZIzh" allowtransparency="true" title="Music" frameBorder="0" />
        </div>
        <h3 id="Misc">Misc</h3>
        <p>
          Said the Sky, Shallou, Two Friends, The Piano Guys, Émile Proulx-Cloutier, Dezza,
          Seven Lions, Madeon
        </p>
        <div className="iframes">
          <iframe src="https://open.spotify.com/embed/artist/4LZ4De2MoO3lP6QaNCfvcu" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe src="https://open.spotify.com/embed/artist/7C3Cbtr2PkH2l4tOGhtCsk" allowtransparency="true" title="Music" frameBorder="0" />
          <iframe scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/917915269&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true" title="Music" frameBorder="no" />
        </div>
        <h3 id="Podcasts">Podcasts</h3>
        <div className="podcasts">
          <li>
            <a href="https://podcasts.apple.com/podcast/tritonia/id296189771" target="_blank" rel="noreferrer">
              Tritonia (
              <i>Tritonal</i>
              )
            </a>
          </li>
          <li>
            <a href="https://www.1001tracklists.com/source/fkx19c/heartfeldt-radio/index.html" target="_blank" rel="noreferrer">
              Heartfeldt Radio (
              <i>Sam Feldt</i>
              )
            </a>
          </li>
          <li>
            <a href="https://www.dondiablo.com/hexagonradio" target="_blank" rel="noreferrer">
              Hexagon Radio (
              <i>Don Diablo</i>
              )
            </a>
          </li>
          <li>
            <a href="https://www.1001tracklists.com/dj/crunkz/index.html" target="_blank" rel="noreferrer">
              Rewind Mix / EDM Party Mix / Best of Future House Mix (
              <i>Crunkz</i>
              )
            </a>
          </li>
          <li>
            <a href="https://podcasts.apple.com/ca/podcast/two-friends-mixes/id1047970546" target="_blank" rel="noreferrer">
              Friendly Sessions / Big Bootie Mixes (
              <i>Two Friends</i>
              )
            </a>
          </li>
          <li>
            <a href="https://podcasts.apple.com/us/podcast/the-pregame-series/id1439290480" target="_blank" rel="noreferrer">
              The Pregame Series (
              <i>Trademark</i>
              )
            </a>
          </li>
          <li>
            <a href="https://podcasts.apple.com/ca/podcast/two-friends-mixes/id1047970546" target="_blank" rel="noreferrer">
              Enhanced Sessions
            </a>
          </li>
          <li>
            <a href="https://podcasts.apple.com/ca/podcast/two-friends-mixes/id1047970546" target="_blank" rel="noreferrer">
              Strange Fruits Radio (
              <i>Steve Void</i>
              )
            </a>
          </li>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Music;
