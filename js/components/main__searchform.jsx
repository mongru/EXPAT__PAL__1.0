import React from 'react';
import ReactDOM from 'react-dom';
//import {Map} from './map';

export class MainSearchForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {

    return (
        <section id="main__searchform" className="main__searchform">
            <div className="container main__searchform--container">
                <div className="row">
                    <div className="col-12">
                        <form className="main__searchform--form" onSubmit={(e) => this.handleSubmit(e)}>
                            <fieldset>
                                <legend className="main__searchform--title">Find people in your area</legend>
                                <input id="pac-input" type="text"
                                    placeholder="Enter your location"/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

            <div id="map"></div>
            <div id="infowindow-content">
                <img src="" width="16" height="16" id="place-icon"/>
                <span id="place-name"  className="title"></span><br/>
                <span id="place-address"></span>
            </div>
            
        </section>
    );
    }
}
