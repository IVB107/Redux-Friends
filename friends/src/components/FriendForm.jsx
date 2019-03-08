import React, { Component } from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;

    > form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 10px;

        > input, button {
            margin: 10px;
        }
    }
`;

class FriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    render(){
        return (
            <FormContainer>
                <form action="submit">
                    <input type="text" placeholder="Name"/>
                    <input type="number" placeholder="0"/>
                    <input type="text" placeholder="Email"/>
                    <button>Submit</button>
                </form>
            </FormContainer>
        )
    }

}

export default FriendForm;

// export default connect(null, { submitForm: submitForm }){FriendForm}