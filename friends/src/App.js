import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import DisplayFriends from './components/DisplayFriends';
import FriendForm from './components/FriendForm';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            friends : [],
            error: ''
        };
    }

    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(res => {
            console.log(res);
            this.setState({friends:res.data})
        })
        .catch( err => {
            console.log(err)
            this.setState({error: err})
        });
    }

    render() {
        return (
        <div>
            <h1>Friends App</h1>
            <DisplayFriends friends={this.state.friends} />
            <FriendForm />
        </div>
        );
    }
}
