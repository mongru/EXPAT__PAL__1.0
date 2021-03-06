import React from 'react';
import ReactDOM from 'react-dom';

import FontAwesome from 'react-fontawesome';

export const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer__container--social">
                            <a href="https://github.com/mongru/EXPAT__PAL__1.0" target="_blank">
                                 <FontAwesome name='github' size='2x'/>
                            </a>
                            <div className="footer__container--logo">
                                <a href="#">
                                    <img src="./assets/logo__footer__small.png" alt="logo expatpal"/>
                                </a>
                            </div>
                        </div>
                        <p className="footer__container--text">
                            Made with :) by&nbsp;
                            <a href="https://github.com/mongru" target="_blank">Monika Grubizna</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
