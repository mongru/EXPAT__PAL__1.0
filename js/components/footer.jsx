import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
  render(){
    return (
        <footer>
            <div className="footer__container container">
                <div className="row">
                    <div className="col-8">
                        <div className="footer__container--social">
                            <a href="#">
                                <i id="flickr" className="fa fa-flickr fa-2x" aria-hidden="true"></i>
                            </a>
                            <a href="#">
                                <i id="vimeo" className="fa fa-vimeo-square fa-2x" aria-hidden="true"></i>
                            </a>
                            <a href="#">
                                <i id="pinterest" className="fa fa-pinterest fa-2x" aria-hidden="true"></i>
                            </a>
                            <a href="#">
                                <i id="twitter" className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="footer__container--logo">
                            <img src="./assets/logo.png" alt="logo expatpal"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}
