import React from 'react';
import ReactDOM from 'react-dom';


import {MainUser} from './main__users.jsx';
import {MainUsers} from './main__users.jsx';

import {MapWithControlledZoom} from './google_map.jsx';

import fire from '../fire';
import users from '../../expatpal-cd11e-export.json';

export class MainSearchForm extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            location: [],
            userInput: false
        };
      }

      componentWillMount(){
          /* Create reference to locations in Firebase Database */
          let locationsRef = fire.database().ref('locations').orderByKey().limitToLast(100);
          locationsRef.on('child_added', snapshot => {
            /* Update React state when location is added at Firebase Database */
            let location = { text: snapshot.val(), id: snapshot.key };
            this.setState({ location: [location].concat(this.state.location) });
          })
        }

        compareLocations = () => {
            const locationValues = Object.values(users.locations);
            locationValues.includes(this.inputEl.value) ? console.log(locationValues[locationValues.indexOf(this.inputEl.value)]) : console.log("no matching locations");
        }

        // function for creating a neighbour profile based on a random pick from JSON database and user input
        createNeighbour = () => {
            const firstValues = Object.values(users.first);
            const lastValues = Object.values(users.last);
            const avatarValues = Object.values(users.avatars);
            const locationValues = Object.values(users.locations);
            const randomName = Object.values(users.first)[Math.floor(Math.random() * firstValues.length)];
            const randomLastName = Object.values(users.last)[Math.floor(Math.random() * lastValues.length)];
            const randomAvatar = Object.values(users.avatars)[Math.floor(Math.random() * avatarValues.length)];
            const randomLocation = Object.values(users.locations)[Math.floor(Math.random() * locationValues.length)];
            console.log(randomName);
            console.log(randomLastName);
            console.log(randomAvatar);
            console.log(randomLocation);

            this.setState({
                name: randomName,
                lastName: randomLastName,
                avatar: randomAvatar,
                location: this.inputEl.value,
                userInput: true
            })
        }

        addLocation = (e) => {
            e.preventDefault(); // <- prevent form submit from reloading the page
            console.log("clicked or enter");
            this.createNeighbour();
            /* Send the location to Firebase */
            if (this.inputEl.value.length > 3) {
                fire.database().ref('locations').push( this.inputEl.value );
                let userLocation = this.inputEl.value;


                this.setState({
                    location: userLocation,
                    userInput: true
                });
                this.inputEl.value = ''; // <- clear the input
            } else {
                alert("Please enter a valid location or select one from autocomplete options")
            }
          }

          // function for creating a neighbour profile based on a random pick from JSON database
          createNeighbour = () => {
              const firstValues = Object.values(users.first);
              const lastValues = Object.values(users.last);
              const avatarValues = Object.values(users.avatars);
              const locationValues = Object.values(users.locations);
              const randomName = Object.values(users.first)[Math.floor(Math.random() * firstValues.length)];
              const randomLastName = Object.values(users.last)[Math.floor(Math.random() * lastValues.length)];
              const randomAvatar = Object.values(users.avatars)[Math.floor(Math.random() * avatarValues.length)];
              const randomLocation = Object.values(users.locations)[Math.floor(Math.random() * locationValues.length)];
            //   console.log(randomName);
            //   console.log(randomLastName);
            //   console.log(randomAvatar);
            //   console.log(randomLocation);

              this.setState({
                  name: randomName,
                  lastName: randomLastName,
                  avatar: randomAvatar,
                  location: randomLocation
              })
          }

    componentDidMount() {
        if(this.state.userInput === true) {
            this.createNeighbour();
        }
    }

    render() {

        // let neighbours =
        // TODO find a better solution for rendering neighbours
        // TODO use Google Maps for React 

        if(this.state.userInput === true) {
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

                    <section className="main__users">
                        <div className="container main__users--container">
                            <div className="row main__users--row">
                                <div className="col-12 main__users--profilebox turquoise">
                                    <div>
                                        <figure className="main__users--avatar" style={{backgroundImage: `url(${this.state.avatar})`}}>
                                        </figure>
                                        <div className="main__users--info">
                                            <p className="main__users--name">Name: <span className="main__users--bold">{this.state.name} {this.state.lastName}</span></p>
                                            <p className="main__users--location">Location: <span className="main__users--bold">{this.state.location}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            );
        }

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
                {/* <MapWithControlledZoom /> */}
                <div id="map"></div>
                <div id="infowindow-content">
                    <img src="" width="16" height="16" id="place-icon"/>
                    <span id="place-name"  className="title"></span><br/>
                    <span id="place-address"></span>
                </div>

                <MainUsers />

            </section>
        );
    }
}
