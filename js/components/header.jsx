import React from 'react';
import ReactDOM from 'react-dom';

class NavMobile extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            displayBurger: "block",
            displayUl: "none",
            mobileNavVisible: true
        };
    }

    handleClick = () => {
        this.setState ({
            displayBurger: this.state.displayBurger=="block"?"none":"block",
            displayUl: this.state.displayUl=="none"?"block":"none",
            mobileNavVisible: this.state.mobileNavVisible=="true"?"false":"true"
        });
    }

    render(){
        const styleObjBurger={
            display: this.state.displayBurger
        }
        const styleObjUl={
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
            )
            }
        }

class Nav extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };
    }

    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }

    navigationLinks() {
        return (
            <nav>
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
            </nav>
        );
    }

    // renderMobileNav() {
    //     if(this.state.mobileNavVisible) {
    //         return <NavMobile mobileNavVisible={this.state.mobileNavVisible}/>;
    //     }
    // }

    renderNavigation() {
        if(this.state.windowWidth <= 768) {
            return (
                <NavMobile mobileNavVisible={this.state.mobileNavVisible}/>
            );
        } else {
            return (<div className="col-12">{this.navigationLinks()}</div>);
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    render() {
        return  (
            <div className="col-7">
                {this.renderNavigation()}
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
                            <Nav />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
