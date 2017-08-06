import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
  render(){
    return (
        <header>
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="menu__logo">
                                <a href="#">
                                    <img src="./assets/logo__negative.png" alt="logo expatpal" />
                                </a>
                            </div>
                        </div>
                        <nav>
                            <div className="col-7">
                                <ul className="nav__links">
                                    <a className="nav__links--link" href="#main__searchform">
                                        <li className="nav__links--link">How it works</li>
                                    </a>
                                    <a className="nav__links--link" href="#main__description">
                                        <li className="nav__links--link">Log in</li>
                                    </a>
                                    <a className="nav__links--link" href="#">
                                        <li className="nav__links--link">Sign up</li>
                                    </a>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}
