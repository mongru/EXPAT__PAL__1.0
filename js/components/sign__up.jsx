import React from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            err: {
                message: ''
            }
        }
    }

    signUp() {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => {
                console.log('error', err);
                this.setState({err})
            });
    }

    render() {
        return(
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign up</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{marginRight:'5%'}}
                        placeholder="email"
                        onChange={e => this.setState({email: e.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={e => this.setState({password: e.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signUp()}
                    >
                        Sign Up
                    </button>
                </div>
                <div>{this.state.err.message}</div>
                <div><Link to={'/signin'}>Sign in instead</Link></div>
            </div>
        )
    }
}

export default SignUp;
