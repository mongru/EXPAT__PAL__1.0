import React from 'react';
import ReactDOM from 'react-dom';
import fire from '../fire';

export class MainSearchForm extends React.Component {
        constructor(props) {
        super(props);
        this.state = { locations: [] };
      }

      componentWillMount(){
          /* Create reference to locations in Firebase Database */
          let locationsRef = fire.database().ref('locations').orderByKey().limitToLast(100);
          locationsRef.on('child_added', snapshot => {
            /* Update React state when location is added at Firebase Database */
            let location = { text: snapshot.val(), id: snapshot.key };
            this.setState({ location: [location].concat(this.state.locations) });
          })
        }

        addLocation(e){
            e.preventDefault(); // <- prevent form submit from reloading the page
            /* Send the location to Firebase */
            if (this.inputEl.value.length > 3) {
                fire.database().ref('locations').push( this.inputEl.value );
                this.inputEl.value = ''; // <- clear the input
            } else {
                alert("Please enter a valid location or select one from autocomplete options")
            }
          }


    render() {

        return (
            <section id="main__searchform" className="main__searchform">
                <div className="container main__searchform--container">
                    <div className="row">
                        <div className="col-12">
                            <form className="main__searchform--form" onSubmit={(e) => this.addLocation(e)}>
                                <fieldset>
                                    <legend className="main__searchform--title">Find people in your area</legend>
                                    <input id="pac-input" type="text" ref={ el => this.inputEl = el }
                                        placeholder="Enter your location"/>
                                </fieldset>
                                <button onClick={(e) => this.addLocation(e)} className="main__searchform--button">Submit</button>
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
