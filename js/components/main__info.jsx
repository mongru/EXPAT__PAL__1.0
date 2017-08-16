import React from 'react';
import ReactDOM from 'react-dom';

export class MainInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transform: this.props.transform
        };
    }

    handleScrollText = (event) => {
        // console.log(event);
        if (this.scrollText !== null) {
            if (($(document).scrollTop() + $(window).height() / 8) > ($('body').height() / 8)) {
                $(this.scrollText).attr('class', 'text-beforeScroll');
            } else {
                $(this.scrollText).attr('class', 'text-afterScroll');
            }
        }
    }

    handleScrollStripe = (event) => {
        // console.log(event);
        if (this.scrollStripe !== null) {
            if (($(document).scrollTop() + $(window).height() / 2) > ($('body').height() / 2)) {
                $(this.scrollStripe).attr('class', 'stripe-beforeScroll');
            } else {
                $(this.scrollStripe).attr('class', 'stripe-afterScroll');
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollText);
        window.addEventListener('scroll', this.handleScrollStripe);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollText);
        window.removeEventListener('scroll', this.handleScrollStripe);
    }

    render(){

        return (
            <main>
                <section className="main">
                    <div className="container main__info">
                        <div className="row">
                            <div className="col-12 main__info--banner">
                                <h1 ref={(ref) => this.scrollText = ref}>
                                    Pay it forward <br/>
                                    expat community
                                </h1>
                                <p>
                                    Meet like-minded people in your new area <br/>
                                    willing to share their knowledge, struggles and experience
                                </p>
                            </div>

                        </div>
                        <div ref={(ref) => this.scrollStripe = ref} className="main__info--stripe"></div>
                        <div className="main__info--circle"></div>
                    </div>
                </section>
            </main>
        );
    }
}
