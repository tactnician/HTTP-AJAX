import React, { Component } from 'react';
import axios from 'axios';


class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: ''
        };
    }
    
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    handleAgeChange = (event) => {
        this.setState({age: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleSubmit = (event) => {
        // alert('A name was submitted: ' + this.state.name + this.state.age + this.state.email);
        axios
            .post(`http://localhost:5000/friends`, {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
            })
            .then(res => console.log('all good my Ninja'))
            .catch(err => console.log("somethin ain't right"))

        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <br/>
            <label>
                Age: 
                <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
            </label>
            <br/>
            <label>
                Email:
                <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default FriendForm;