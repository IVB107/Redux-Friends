import React from 'react';
import styled from 'styled-components';

const FriendContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    border: 2px solid darkolivegreen;

    > p {
        margin: 5px;
    }
`;

const Friend = props => {
    return (
        <FriendContainer>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </FriendContainer>
    )
}

export default Friend;