import React from 'react';
import ReactDOM from 'react-dom';

import fire from '../fire';

class MainDescription extends React.Component {

    constructor(props){
        super(props);
        this.state=({
            loggedIn: false,
            formOk: true
        });
    }

    handleLogin(e) {
        e.preventDefault();
        if(this.inputName.value.length>4&&this.inputPass.value.length>8) {

            const userAccount = {
                name: this.inputName.value,
                pass: this.inputPass.value
            }

            const newUserAcconunt = fire.database().ref('user_profiles').push(userAccount);
            // console.log("added to firebase");
            this.inputName.value = '';
            this.inputPass.value = '';
            this.setState({
                loggedIn: true,
                formOk: true
            });
            // alert('Thank you for creating your account! Your details have been added to our database')
        } else {
            this.setState({
                formOk: false
            });
            // alert('Your username must be at least 4 letters long. Your password must have at least 8 characters. ')
        }
    }

    handleSliderClick(e) {
        e.preventDefault();
        const dots = document.querySelectorAll(".main__description--dot");
        console.log(dots);
        console.log(e);
        // dots.forEach(dot => {
        //     console.log(dot);
        //     if(!dot.classList.contains("active")) {
        //         dot.classList.add("active");
        //     }
        // });
    }

    render(){

        const loginMessage = 'Thank you for logging in! Your details have been added to our database';

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

                            <form onSubmit={(e) => this.handleLogin(e)} className="main__description--form">
                                <input className="main__description--username" type="text" name="username" placeholder="username" ref={ el => this.inputName = el }></input>
                                {
                                    !this.state.formOk ? <p className="main__description--alert">Your username must be at least 4 letters long.</p> : ''
                                }
                                <input className="main__description--password" type="password" name="password" placeholder="password" ref={ el => this.inputPass = el }></input>
                                {
                                    !this.state.formOk ? <p className="main__description--alert">Your password must have at least 8 characters</p> : ''
                                }
                                <button onClick={(e) => this.handleLogin(e)} className="main__description--button">Login</button>
                                <div style={{display:"none"}}>{loginMessage}</div>
                                {
                                    this.state.loggedIn ? <p className="main__description--alert user">{loginMessage} We are currently working on your profile page. Please come back soon.</p> : ''
                                }
                            </form>


                        </div>
                        <div className="col-5">
                            <figure className="main__description--image">
                                <img className="main__description--device" src="./assets/Device_small.png" alt="device snapshot" data="1" />
                                <img className="main__description--screen1" src="./assets/Login__screen.jpg" alt="login screen snapshot" data="2" />
                                <img className="main__description--screen2" src="./assets/Profile__screen.jpg" alt="profile screen snapshot" data="3" />
                            </figure>
                            <div className="main__description--dots">
                                <div className="main__description--dot" data="1" onClick={(e) => this.handleSliderClick(e)}></div>
                                <div className="main__description--dot" data="2"></div>
                                <div className="main__description--dot" data="3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainDescription;
