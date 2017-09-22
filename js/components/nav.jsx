import React from 'react';
import ReactDOM from 'react-dom';

// -------> COMPONENTS
import { NavMobile } from './nav__mobile.jsx';


export class Nav extends React.Component {
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
        );
    }
}
