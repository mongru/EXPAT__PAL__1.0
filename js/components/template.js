import React from 'react';
import ReactDOM from 'react-dom';

// -------> COMPONENTS
import Header from './header.js';
import MainInfo from './main__info.js';
import MainDescription from './main__description.js';
import MainSearchForm from './main__searchform.js';
import ContactForm from './contact__form.js';
import Footer from './footer.js';


const Template = () => {
    return (
        <div className="container__wrapper">
            <Header />
            <main>
                <MainInfo />
                <MainDescription />
                <MainSearchForm />
                <ContactForm />
            </main>
            <Footer />
        </div>

    );
}

export default Template;
