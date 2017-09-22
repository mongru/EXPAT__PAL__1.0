import React from 'react';
import ReactDOM from 'react-dom';

export class NavMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBurger: "block",
            displayUl: "none",
            mobileNavVisible: true
        };
    }

    handleClick = () => {
        this.setState({
            displayBurger: this.state.displayBurger == "block"
                ? "none"
                : "block",
            displayUl: this.state.displayUl == "none"
                ? "block"
                : "none",
            mobileNavVisible: this.state.mobileNavVisible == "true"
                ? "false"
                : "true"
        });
    }

    render() {
        const styleObjBurger = {
            display: this.state.displayBurger
        }
        const styleObjUl = {
            display: this.state.displayUl
        }

        return (
            <div>
                <span style={styleObjBurger} className="hamburger" onClick={this.handleClick}>
                    <span className="hamburger__stripe"></span>
                </span>
                <nav style={styleObjUl} className="nav__mobile">
                    <ul className="nav__mobile__menu">
                        <li key={1} className="nav__mobile__menu--item">
                            <a href="#main__searchform" className="nav__mobile__menu--link">How it works</a>
                        </li>
                        <li key={2} className="nav__mobile__menu--item">
                            <a href="#main__description" className="nav__mobile__menu--link">Log in</a>
                        </li>
                        <li key={3} className="nav__mobile__menu--item">
                            <a href="#" className="nav__mobile__menu--link">Sign up</a>
                        </li>
                    </ul>
                    <div className="active" onClick={this.handleClick}>
                        <span className="hamburger__stripe"></span>
                    </div>
                </nav>
            </div>
        );
    }
}
