import React from 'react';

import FriendsList from './FriendsList';
import FriendForm from './FriendForm';

const Home = () => {
    return (
        <div>
            <FriendForm />
            <FriendsList />
        </div>
    )
}

export default Home;