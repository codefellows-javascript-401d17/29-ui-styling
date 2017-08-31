import './style/_header.scss';

import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>
        <section className="title">
          <h1 className="titleName">save dat money</h1>
          <img className="grillimg" src="src/component/header/assets/grill.png"></img>
          <h1 className="titleName">keep dat money</h1>
        </section>
          <nav>
            <ul>

            </ul>
          </nav>
      </header>
    )
  }
}

export default Header
