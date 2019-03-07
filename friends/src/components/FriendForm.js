import React, { Component } from 'react';


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
        alert('A name was submitted: ' + this.state.name + this.state.age + this.state.email);
        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <label>
                Age:
                <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
            </label>
            <label>
                Email:
                <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default FriendForm;