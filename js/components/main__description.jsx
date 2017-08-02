import React from 'react';
import ReactDOM from 'react-dom';

export class MainDescription extends React.Component {
  render(){
    return (
        <section className="main__description">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <p className="main__description--title">
                            How it works
                        </p>
                        <h2 className="main__description--heading">
                            We are a platform for sharing the hands-on knowledge of real people.
                        </h2>
                        <article className="main__description--text">
                            Connect online, grab a cuppa offline, and break the cycle of fear and isolation.
                        </article>
                        <input className="main__description--username" type="text" name="username" placeholder="username"></input>
                        <input className="main__description--password" type="password" name="password" placeholder="password"></input>
                        <button className="main__description--button">Login</button>
                    </div>
                    <div className="col-5">
                        <figure className="main__description--image">
                            <img className="main__description--device" src="./assets/Device.png" alt="device snapshot" />
                            <img className="main__description--screen1" src="./assets/Login__screen.png" alt="login screen snapshot" />
                            <img className="main__description--screen2" src="./assets/Profile__screen.png" alt="profile screen snapshot" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
