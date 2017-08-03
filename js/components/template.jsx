import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './header.jsx';
import {MainInfo} from './main__info.jsx';
import {MainDescription} from './main__description.jsx';
import {MainSearchForm} from './main__searchform.jsx';
import {MainUsers} from './main__users.jsx';
import {ContactForm} from './contact__form.jsx';
import {Footer} from './footer.jsx';

export class Template extends React.Component {
  render(){
    return (
        <div className="container__wrapper">
            <Header />
            <MainInfo />
            <MainDescription />
            <MainSearchForm />
            <MainUsers />
            <ContactForm />
            <Footer />
        </div>
    )
  }
}
