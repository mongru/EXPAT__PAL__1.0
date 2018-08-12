import React from 'react';
import ReactDOM from 'react-dom';

import fire from '../fire';
import users from '../../expatpal-cd11e-export.json';

// -------> COMPONENTS
import MainUser from './main__user.js';
import MainUsers from './main__users.js';
import Spinner from './spinner.js';

class MainSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [],
            userInput: false,
            noMatchFound: false,
            formNotOk: false
        };
    }

    componentWillMount() {
        /* Create reference to locations in Firebase Database */
        let locationsRef = fire.database().ref('locations').orderByKey().limitToLast(100);
        locationsRef.on('child_added', snapshot => {
            /* Update React state when location is added at Firebase Database */
            let location = {
                text: snapshot.val()
            };
            this.setState({
                location: [location].concat(this.state.location)
            });
        });
    }


    // function for creating a neighbour profile based on a random pick from JSON database and user input
    createNeighbour = (location) => {
        const firstValues = Object.values(users.first);
        const lastValues = Object.values(users.last);
        const avatarValues = Object.values(users.avatars);
        const randomName = Object.values(users.first)[Math.floor(Math.random() * firstValues.length)];
        const randomLastName = Object.values(users.last)[Math.floor(Math.random() * lastValues.length)];
        const randomAvatar = Object.values(users.avatars)[Math.floor(Math.random() * avatarValues.length)];
        // console.log(randomName);
        // console.log(randomLastName);
        // console.log(randomAvatar);
        // console.log(randomLocation);
        this.setState({
            name: randomName,
            lastName: randomLastName,
            avatar: randomAvatar,
            location,
            });
    }


    addLocation = (e) => {
        e.preventDefault(); // <- prevent form submit from reloading the page
        let locationBank = [];
        /* Send the location to Firebase */
        if (this.inputEl.value.length > 3) {
            if(Array.isArray(this.state.location)) {
                fire.database().ref('locations').push(this.inputEl.value);
                console.log('location added to database');

                this.state.location.map((city) => {
                    if (city.text === this.inputEl.value) {

                        this.setState({
                            // location: locationBank,
                            userInput: true,
                            noMatchFound: false,
                            formNotOk: false
                        });

                        this.createNeighbour(city.text);

                    } else {
                        // console.log('no match found');
                        this.setState({
                            // userInput: true,
                            noMatchFound: true,
                            formNotOk: false
                        });
                        return null;
                    }
                });

                this.setState({
                    userInput: true,
                    // noMatchFound: true,
                    formNotOk: false
                });

                // console.log(locationBank);
                this.inputEl.value = ''; // <- clear input field

            } else {

                // const noMatchFoundMessage = 'NO REGISTERED USERS IN THIS AREA';
                // console.log(noMatchFoundMessage);

                this.setState({
                    // location: noMatchFoundMessage,
                    userInput: true,
                    formNotOk: false
                    // noMatchFound: true
                });

                this.createNeighbour(this.inputEl.value);
                this.setState({
                    noMatchFound: false,
                    formNotOk: false
                });
                this.inputEl.value = '';
            }

        } else {
            this.setState({
                formNotOk: true
            });
            // alert("Please enter a valid location or select one from autocomplete options");
        }
    }


    render() {

        // console.log(this.state.location);

        // let neighbours;
        // TODO find a better solution for rendering neighbours
        // TODO use Google Maps for React


        // if (this.state.userInput&&!this.state.noMatchFound) {
        //     return (
        //         <section id="main__searchform" className="main__searchform">
        //             <div className="container main__searchform--container">
        //                 <div className="row">
        //                     <div className="col-12">
        //                         <form className="main__searchform--form" onSubmit={(e) => this.addLocation(e)}>
        //                             <fieldset>
        //                                 <legend className="main__searchform--title">Find people in your area</legend>
        //                                 <input id="pac-input" type="text" ref={el => this.inputEl = el} placeholder="Enter your location"/>
        //                             </fieldset>
        //                             <button onClick={(e) => this.addLocation(e)} className="main__searchform--button">Submit</button>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //             <div id="map"></div>
        //             <div id="infowindow-content">
        //                 <img src="" width="16" height="16" id="place-icon"/>
        //                 <span id="place-name" className="title"></span><br/>
        //                 <span id="place-address"></span>
        //             </div>
        //
                //     <section className="main__users">
                //         <div className="container main__users--container">
                //             <div className="row main__users--row">
                //                 <div className="col-12 main__users--profilebox turquoise">
                //                     <div>
                //                         <figure className="main__users--avatar" style={{
                //                             backgroundImage: `url(${this.state.avatar})`
                //                         }}></figure>
                //                         <div className="main__users--info">
                //                             <p className="main__users--name">Name:
                //                                 <span className="main__users--bold"> {this.state.name} {this.state.lastName}</span>
                //                             </p>
                //                             <p className="main__users--location">Location:
                //                                 <span className="main__users--bold"> {this.state.location.toString()}</span>
                //                             </p>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </section>
                // </section>
        //     );
        // }

        return (
            <section id="main__searchform" className="main__searchform">
                <div className="container main__searchform--container">
                    <div className="row">
                        <div className="col-12">
                            <form className="main__searchform--form" onSubmit={(e) => this.addLocation(e)}>
                                <fieldset>
                                    <legend className="main__searchform--title">Find people in your area</legend>
                                    {
                                        this.state.formNotOk ? <p className="main__searchform--alert">Please enter a valid location or select one from autocomplete options</p> : ''
                                    }
                                    <input id="pac-input" type="text" ref={el => this.inputEl = el} placeholder="Enter your location"/>
                                </fieldset>
                                <button onClick={(e) => this.addLocation(e)} className="main__searchform--button">Submit</button>
                                {
                                    this.state.userInput ? <p className="main__searchform--alert">Thank you. Your location has been successfully added to our database.</p> : ''
                                }
                            </form>
                        </div>
                    </div>
                </div>
                <div id="map"></div>
                <div id="infowindow-content">
                    <img src="" width="16" height="16" id="place-icon"/>
                    <span id="place-name" className="title"></span><br/>
                    <span id="place-address"></span>
                </div>

                {
                    this.state.userInput&&!this.state.noMatchFound&&!this.state.formNotOk
                    ? (<section className="main__users">
                            <div className="container main__users--container">
                                <div className="row main__users--row">
                                    <div className="col-12 main__users--profilebox turquoise">
                                        <p className="main__searchform--alert">Your match:</p>
                                        <div>
                                            <figure className="main__users--avatar match-found" style={{
                                                backgroundImage: `url(${this.state.avatar})`
                                            }}></figure>
                                            <div className="main__users--info">
                                                <p className="main__users--name">Name:
                                                    <span className="main__users--bold"> {this.state.name} {this.state.lastName}</span>
                                                </p>
                                                <p className="main__users--location">Location:
                                                    <span className="main__users--bold"> {this.state.location.toString()}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>)
                        : ''
                }

                {
                    this.state.noMatchFound ?
                    <section className="main__users">
                        <div className="container main__users--container">
                            <div className="row main__users--row">
                                <div className="col-12 main__users--profilebox turquoise">
                                    <p className="main__searchform--alert">Sorry, we haven't found anyone registered in this area. Please try another place nearby.</p>
                                </div>
                            </div>
                        </div>
                    </section> :
                    ''
                }

                <MainUsers />
            </section>
        );
    }
}


export default MainSearchForm;