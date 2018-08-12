import React from 'react';
import ReactDOM from 'react-dom';

// -------> COMPONENTS
import Nav from './nav.js';


const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="menu__logo">
                                <a href="#">
                                    <img src="./assets/logo__negative__small.png" alt="logo expatpal" />
                                </a>
                            </div>
                        </div>
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
