/* eslint-disable no-console */
import React from 'react';
import cv from '../../media/cv_academic_en.pdf';
import './styles.scss';
import menuIcon from '../../static/menu_icon.png';

function Menu() {
  // const mainStyle = 'menu';

  const [toggleResearch, setToggleResearch] = React.useState(false);
  const [toggleMisc, setToggleMisc] = React.useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleClickResearch = () => {
    setToggleMisc(false);
    setToggleResearch(!toggleResearch);
  };

  const handleClickMisc = () => {
    setToggleResearch(false);
    setToggleMisc(!toggleMisc);
  };

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  function useWindowDimensions() {
    const [windowWidth, setWindowDimensions] = React.useState(getWindowWidth());

    React.useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowWidth());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
  }

  const { width } = useWindowDimensions();

  return (
    <div>
      <div className="languagePicker">
        <a href="/#Francais">FR</a>
      </div>
      <div className="menu">
        <h1 className="left">
          <a href="/">Anthony Coache</a>
        </h1>
        <ul className="right" style={{ display: (width > 650) ? 'block' : 'none' }}>
          <li>
            <button type="button" onClick={handleClickMisc}>Misc</button>
            <div style={{ display: toggleMisc ? 'grid' : 'none' }}>
              <ul className="dropdown">
                <a href="/#Piano">
                  Piano
                </a>
              </ul>
              <ul className="dropdown">
                <a href="/#Music">
                  Music
                </a>
              </ul>
            </div>
          </li>
          <li>
            <button type="button" onClick={handleClickResearch}>Research</button>
            <div style={{ display: toggleResearch ? 'grid' : 'none' }}>
              <ul className="dropdown">
                <a href="/Research/#Publications">
                  Publications
                </a>
              </ul>
              <ul className="dropdown">
                <a href="/Research/#Presentations">
                  Presentations
                </a>
              </ul>
            </div>
          </li>
          <li>
            <a href="mailto:anthony.coache@gmail.com">
              Contact
            </a>
          </li>
          <li>
            <a href={cv} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
        <ul className="menu_hidden" style={{ display: (width <= 650) ? 'grid' : 'none' }}>
          <button type="button" onClick={showMenu}>
            <img src={menuIcon} alt="Hamburger Menu Icon" />
          </button>
          <div className="menu_items" style={{ display: toggleMenu ? 'grid' : 'none' }}>
            <a href={cv} target="_blank" rel="noreferrer">CV</a>
            <a href="mailto:anthony.coache@gmail.com">Contact</a>
            <a href="/#Research">Research</a>
            <a href="/#Piano">Piano</a>
            <a href="/#Music">Music</a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
