import React from 'react';
import ReactDOM from 'react-dom';

import fire from '../fire';

export class ContactForm extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            formOk: false
        }
    }

    handleMessage = (e) => {
        e.preventDefault();

        if(this.inputName.value.length>4&&this.inputEmail.value.length>8&&this.inputMessage.value.length>8) {
            const contactForm = {
                name: this.inputName.value,
                email: this.inputEmail.value,
                message: this.inputMessage.value
            }
            this.setState({
                formOk: true
            });

            const newContactForm = fire.database().ref('contact').push(contactForm);
            // console.log("added to firebase");
            // alert('Thank you for your message! We will get back to you shortly')
            // clear input fields after successful submission
            this.inputName.value = '';
            this.inputEmail.value = '';
            this.inputMessage.value = '';

        } else {
            this.setState({
                formOk: false
            });
            // alert('Please make sure all the fields are filled in')
        }
    }

    render() {
        return (
            <section className="contact">
                <div className="container contact__container">
                    <div className="row">
                        <div className="col-8">

                            <div className="contact__container--title">
                                Questions? Go for it!
                            </div>
                            <div className="title__circle"></div>
                            <form onSubmit={(e) => this.handleMessage(e)} className="contact__container--form">
                                <fieldset>
                                    <input required type="text" className="contact__form--input" name="name" placeholder="Your name" ref={ el => this.inputName = el }/>
                                    <input required type="email" className="contact__form--input" name="email" placeholder="Your email" ref={ el => this.inputEmail = el }/>
                                    <textarea className="contact__form--message" placeholder="Your message" rows="" cols="" ref={ el => this.inputMessage = el }></textarea>
                                    {
                                        !this.state.formOk ? <p className="contact__form--alert">Please make sure all the fields are filled in</p> : ''
                                    }
                                    {
                                        this.state.formOk ? <p className="contact__form--alert">Thank you for your message! We will get back to you shortly</p> : ''
                                    }
                                    <button onClick={(e) => this.handleMessage(e)} className="contact__form--submitBtn">Send</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
