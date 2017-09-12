import React from 'react';
import ReactDOM from 'react-dom';

import fire from '../fire';

export class ContactForm extends React.Component {

    handleMessage = (e) => {
        e.preventDefault();
        if(this.inputName.value.length>4&&this.inputEmail.value.length>8&&this.inputMessage.value.length>8) {
            const contactForm = {
                name: this.inputName.value,
                email: this.inputEmail.value,
                message: this.inputMessage.value
            }

            const newContactForm = fire.database().ref('contact').push(contactForm);

            console.log("added to firebase");
            alert('Thank you for your message! We will get back to you shortly')
            this.inputName.value = '';
            this.inputEmail.value = '';
            this.inputMessage.value = '';

        } else {
            alert('Please make sure all the fields are filled in')
        }
    }

    render(){

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
                                    <input className="contact__form--input" type="text" name="name" placeholder="Your name" ref={ el => this.inputName = el }/>
                                    <input className="contact__form--input" type="email" name="email" placeholder="Your email" ref={ el => this.inputEmail = el }/>
                                    <textarea className="contact__form--message" placeholder="Your message" rows="" cols="" ref={ el => this.inputMessage = el }></textarea>
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
