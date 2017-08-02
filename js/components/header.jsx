import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
  render(){
    return (
        <header>
            <div className="container menu">
                <div className="row">
                    <div className="col-5">
                        <div className="menu__logo">
                            <img src="./assets/logo__negative.png" />
                        </div>
                    </div>
                    <nav>
                        <div className="col-7">
                            <ul className="nav__links">
                                <li className="nav__links--link">How it works</li>
                                <li className="nav__links--link">Log in</li>
                                <li className="nav__links--link">Sign up</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
  }
}
