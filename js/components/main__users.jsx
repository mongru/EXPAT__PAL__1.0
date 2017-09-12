import React from 'react';
import ReactDOM from 'react-dom';

import {MainSearchForm} from './main__searchform.jsx';

import fire from '../fire';
import users from '../../expatpal-cd11e-export.json';


export class MainUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            avatar: "",
            error: false,
            userInput: false,
            location: this.props.location
        }
    }

    // -------> function for checking if server res is ok
    handleErrors = (res) => {
        if(!res.ok) {
            throw Error(res.statusText);
        }
        return res;
    }

    // function for getting random user info & avatar from API
    createUser = () => {
        const userUrl = "https://randomuser.me/api/";

        fetch(userUrl)
            .then(this.handleErrors)
            .then(res => res.json()
            .then(res => {
                console.log(res);
                // console.log(res.results[0].name.first, res.results[0].name.last, res.results[0].location.city, res.results[0].location.street, res.results[0].picture.large);

                const firstName = res.results[0].name.first;
                const lastName = res.results[0].name.last;
                const avatar = res.results[0].picture.large;
                const city = res.results[0].location.city;

                const randomUserProfile = {
                    name: firstName,
                    lastName: lastName,
                    avatar: avatar
                }

                // using google geocode api to get a formatted google adddres of the user based on the city name generated by random user API
                const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBAyZk26RYvZXIvGHkLSohlKzZxwpXVqos`;
                fetch(geocodeUrl)
                    .then(this.handleErrors)
                    .then(res => res.json()
                    .then(res => {
                        console.log(res.results[0].formatted_address);
                        const formattedAddress = res.results[0].formatted_address;
                        randomUserProfile.location = formattedAddress;
                        fire.database().ref('random_user').push( randomUserProfile);
                        this.setState({
                            location: formattedAddress
                        });
                    })

                )

                    this.setState({
                        name: res.results[0].name.first,
                        lastName: res.results[0].name.last,
                        avatar: res.results[0].picture.large
                    });
                }) )
            .catch((err) => {
                this.setState ({
                    error: true
                });
            })
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
        console.log(randomName);
        console.log(randomLastName);
        console.log(randomAvatar);
        console.log(randomLocation);

        this.setState({
            name: randomName,
            lastName: randomLastName,
            avatar: randomAvatar,
            city: randomLocation
        })
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         userInput: false
    //     })
    // }

    // componentDidUpdate() {
    //     if(this.state.userInput === true) {
    //         this.createNeighbour();
    //     }
    // }

    componentDidMount() {

        this.createUser();
        // this.createNeighbour();
    }

    render() {

        if (this.state.userInput === false) {
            return (
                <div>
                    <figure className="main__users--avatar" style={{backgroundImage: `url(${this.state.avatar})`}}>
                    </figure>
                    <div className="main__users--info">
                        <p className="main__users--name">Name: <span className="main__users--bold">{this.state.name} {this.state.lastName}</span></p>
                        <p className="main__users--location">Location: <span className="main__users--bold">{this.state.location}</span></p>
                    </div>
                </div>
            );
        }
    }
}

export class MainUsers extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInput: this.props.userInput
        }
    }

    render(){
        return (
                <section className="main__users">
                    <div className="container main__users--container">
                        <div className="row main__users--row">
                            <div className="col-4 main__users--profilebox violet">
                                <MainUser/>
                            </div>
                            <div className="col-4 main__users--profilebox turquoise">
                                <MainUser/>
                            </div>
                            <div className="col-4 main__users--profilebox blue">
                                <MainUser/>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}
