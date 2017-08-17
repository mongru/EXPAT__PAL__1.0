import React from 'react';
import ReactDOM from 'react-dom';

fetch("https://randomuser.me/api/")
  .then(res => res.json()
  .then(res => {

      console.log(res);
      console.log(res.results[0].name.first, res.results[0].name.last, res.results[0].location.city, res.results[0].location.street, res.results[0].picture.large);

  }));

export class MainUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            street: "",
            city: "",
            avatar: ""
        }
    }

    componentDidMount() {

      fetch("https://randomuser.me/api/")
        .then(res => res.json()
        .then(res => {

            console.log(res);

                this.setState({
                    name: res.results[0].name.first,
                    lastName: res.results[0].name.last,
                    street: res.results[0].location.street,
                    city: res.results[0].location.city,
                    avatar: res.results[0].picture.large
                })
            }) )
        }

    render() {
        return (
            <div>
                <figure className="main__users--avatar">
                    <img className="main__users--avatar" src={this.state.avatar} alt="profile picture" />
                </figure>
                <div className="main__users--info">
                    <p className="main__users--name">Name: {this.state.name} {this.state.lastName}</p>
                    <p className="main__users--location">Location: {this.state.street} {this.state.city}</p>
                </div>
            </div>
        );
    }
}

export class MainUsers extends React.Component {

    render(){

        return (
            <section className="main__users">
                <div className="container main__users--container">
                    <div className="row main__users--row">
                        <div className="col-4 main__users--profilebox violet">
                            <MainUser />
                        </div>
                        <div className="col-4 main__users--profilebox turquoise">
                            <MainUser />
                        </div>
                        <div className="col-4 main__users--profilebox blue">
                            <MainUser />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
