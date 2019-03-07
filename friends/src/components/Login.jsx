import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { login } from '../actions/index';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 360px;
    margin: 40px;
    border: 2px solid blue;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-around;
    margin: 20px 10px;
    width: 70%;

    > input, button {
        margin: 5px 0;
    }

    > button {
        width: 100%;
        padding: 5px;
        font-size: 14px;
        align-self: center;
    }
`;

class Login extends Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }        
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    handleLogin = e => {
        console.log('Logging in')
        e.preventDefault();
        console.log('Handling login. Props: ')
        console.log(this.props);
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/');
            });
    }

    render(){
        return (
            <LoginContainer>
                <Form action="submit">
                    <input 
                        type="text" 
                        name='username'
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        name='password'
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleLogin}>Login</button>
                </Form>
            </LoginContainer>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return({
        login: (credentials) => {dispatch(login(credentials))}
    })
}

export default connect( null, mapDispatchToProps )(Login);