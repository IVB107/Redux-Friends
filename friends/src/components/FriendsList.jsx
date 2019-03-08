import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// import Friend from './Friend';

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FriendsList = () => {
    return (
        <ListContainer>
            <h2>Friends:</h2>
            {/* {props.friends.map(friend => {
                return <Friend />
            })} */}
        </ListContainer>
    )
}

// const mstp = (state) => {
//     return {
//         friends: state.friendsReducer.friends
//     }
// }

export default connect(null, null)(FriendsList);