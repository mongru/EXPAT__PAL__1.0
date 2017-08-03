import React from 'react';
import ReactDOM from 'react-dom';

export class ContactForm extends React.Component {
  render(){

    return (
        <section className="contact">
            <div className="container contact__container">
                <div className="row">
                    <div className="col-8">
                        <div className="contact__container--title">
                            Questions? Go for it!
                        </div>
                        <form className="contact__container--form">
                            <fieldset>
                                <input className="contact__form--input" type="text" name="name" placeholder="Your name"/>
                                <input className="contact__form--input" type="email" name="email" placeholder="Your email"/>
                                <textarea className="contact__form--message" placeholder="Your message"></textarea>
                                <button className="contact__form--submitBtn">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
