import React from 'react';
import ReactDOM from 'react-dom';

export class MainInfo extends React.Component {

    handleScrollText = () => {
        let bodyHeight = document.body.clientHeight;
        let windowHeight = window.innerHeight;
        let docScrollTop = window.pageYOffset;

        if(this.scrollText !== null) {
            if((docScrollTop + windowHeight / 8) > bodyHeight / 8) {
                    this.scrollText.classList.add('text-beforeScroll');
                    this.scrollText.classList.remove('text-afterScroll');

                    // console.log("Scroll works");
                    // console.log(this.scrollText.className);
                } else {
                    this.scrollText.classList.add('text-afterScroll');
                    this.scrollText.classList.remove('text-beforeScroll');
                }
            }
        }

    handleScrollStripe = () => {
        let bodyHeight = document.body.clientHeight;
        let windowHeight = window.innerHeight;
        let docScrollTop = window.pageYOffset;
        // console.log(bodyHeight);
        // console.log(windowHeight);
        // console.log(docScrollTop);
        // console.log(this.scrollStripe);


        if(this.scrollStripe !== null) {
            if((docScrollTop + windowHeight / 2) > bodyHeight / 2) {
                    this.scrollStripe.classList.add('stripe-beforeScroll');
                    this.scrollStripe.classList.remove('stripe-afterScroll');
                    // console.log("Scroll works");
                    // console.log(this.scrollStripe.className);
                } else {
                    this.scrollStripe.classList.add('stripe-afterScroll');
                    this.scrollStripe.classList.remove('stripe-beforeScroll');
                }
            }
        }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollText, false);
        window.addEventListener('scroll', this.handleScrollStripe, false);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollText);
        window.removeEventListener('scroll', this.handleScrollStripe);
    }

    render() {
        return (
            <section className="main">
                <div className="container main__info">
                    <div className="row">
                        <div className="col-12 main__info--banner">
                            <h1 ref={(ref) => this.scrollText = ref}>
                                Pay it forward <br/>
                                expat community
                            </h1>
                            <p>
                                Meet like-minded people in your new area willing to share their knowledge, struggles and experience
                            </p>
                        </div>
                    </div>
                    <div ref={(ref) => this.scrollStripe = ref} className="main__info--stripe"></div>
                    <div className="main__info--circle"></div>
                </div>
            </section>
        );
    }
}
