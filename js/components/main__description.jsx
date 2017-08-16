import React from 'react';
import ReactDOM from 'react-dom';

export class MainDescription extends React.Component {

    handleLoginUser(e) {
        e.preventDefault()
    }

    render(){
        return (
            <section id="main__description" className="main__description">
                <div className="container main__description--container">
                    <div className="row">
                        <div className="col-7">
                            <p className="main__description--title">
                                How it works
                            </p>
                            <div className="title__circle"></div>
                            <h2 className="main__description--heading">
                                We are a platform for sharing the hands-on knowledge of real people.
                            </h2>

                            <article className="main__description--text">
                                Connect online, grab a cuppa offline, and break the cycle of fear and isolation.
                            </article>

                            <form onSubmit={(e) => this.handleLoginUser(e)} className="main__description--form">
                                <input className="main__description--username" type="text" name="username" placeholder="username"></input>
                                <input className="main__description--password" type="password" name="password" placeholder="password"></input>
                                <button onClick={(e) => this.handleLoginUser(e)} className="main__description--button">Login</button>
                            </form>

                        </div>
                        <div className="col-5">
                            <figure className="main__description--image">
                                <img className="main__description--device" src="./assets/Device.png" alt="device snapshot" />
                                <img className="main__description--screen1" src="./assets/Login__screen.png" alt="login screen snapshot" />
                                <img className="main__description--screen2" src="./assets/Profile__screen.png" alt="profile screen snapshot" />
                            </figure>
                            <div className="main__description--dots">
                                <div className="main__description--dot"></div>
                                <div className="main__description--dot"></div>
                                <div className="main__description--dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
