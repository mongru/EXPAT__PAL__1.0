import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.showNav = this.showNav.bind(this); // WIP
        this.state = {
            isOpen: false
        };
    }

    showNav(e) {
        e.preventDefault()
        this.setState ({
            isOpen: true
        });
    }

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
                                    <span className="hamburger" isOpen={this.state.isOpen} onClick={this.showNav} >
                                        <span className="hamburger__stripe"></span>
                                    </span>
                                    <nav className="nav__mobile">
                                        <ul className="nav__mobile__menu">
                                            <li className="nav__mobile__menu--item">
                                                <a href="#" className="nav__mobile__menu--link">Test</a>
                                            </li>
                                            <li className="nav__mobile__menu--item">
                                                <a href="#" className="nav__mobile__menu--link">Test</a>
                                            </li>
                                            <li className="nav__mobile__menu--item">
                                                <a href="#" className="nav__mobile__menu--link">Test</a>
                                            </li>
                                            <li className="nav__mobile__menu--item">
                                                <a href="#main__description" className="nav__mobile__menu--link">Test</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
