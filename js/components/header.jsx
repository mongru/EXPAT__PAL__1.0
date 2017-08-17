import React from 'react';
import ReactDOM from 'react-dom';

class NavMobile extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            displayBurger: "block",
            displayUl: "none"
        }
    }

    handleClick = () => {
        this.setState ({
            displayBurger: this.state.displayBurger=="block"?"none":"block",
            displayUl: this.state.displayUl=="none"?"block":"none"
        });
    }

    render(){
        const styleObjBurger={
            display: this.state.displayBurger
        }
        const styleObjUl={
            display: this.state.displayUl
        }
        return (<div>
                    <span className="hamburger" onClick={this.handleClick}>
                        <span className="hamburger__stripe"></span>
                    </span>
                    <nav style={styleObjUl} className="nav__mobile">
                        <ul className="nav__mobile__menu">
                            <li className="nav__mobile__menu--item">
                                <a href="#main__searchform" className="nav__mobile__menu--link">How it works</a>
                            </li>
                            <li className="nav__mobile__menu--item">
                                <a href="#main__description" className="nav__mobile__menu--link">Log in</a>
                            </li>
                            <li className="nav__mobile__menu--item">
                                <a href="#" className="nav__mobile__menu--link">Sign up</a>
                            </li>
                        </ul>
                        <div className="active" onClick={this.handleClick}>
                            <span className="hamburger__stripe"></span>
                        </div>
                    </nav>
                </div>
            )
            }
        }

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
                                        <li className="nav__links--link">
                                            <a className="nav__links--link" href="#main__searchform">
                                                How it works
                                            </a>
                                        </li>
                                        <li className="nav__links--link">
                                            <a className="nav__links--link" href="#main__description">
                                                Log in
                                            </a>
                                        </li>
                                        <li className="nav__links--link">
                                            <a className="nav__links--link" href="#">
                                                Sign up
                                            </a>
                                        </li>
                                    </ul>
                                    <NavMobile />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
