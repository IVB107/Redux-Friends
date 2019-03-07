import React, { Component } from 'react';

class Login extends Component {

    render(){
        return (
            <div className="login-container">
                <form action="submit">
                    <input type="text"/>
                    <input type="text"/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;