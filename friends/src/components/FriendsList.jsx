import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Friend from './Friend';

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FriendsList = (props) => {

    console.log("PROPS:");
    console.log(props);

    return (
        <ListContainer>
            <h2>Friends:</h2>
            {props.friends.map(friend => {
                return <Friend 
                            key={friend.id}
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                        />
            })}
        </ListContainer>
    )
}

const matchStateToProps = (state) => {

    console.log('STATE:')
    console.log(state);

    return {
        friends: state.friends
    }
}

export default connect(matchStateToProps)(FriendsList);