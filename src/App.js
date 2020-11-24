import './App.css';
import React, { Fragment } from 'react';
import UserProfile from './components/social-profile/user-profile';
import userData from './components/social-profile/user.json';
import Statistics from './components/statistics/statistics';
import statsData from './components/statistics/stats.json';
import FriendsList from './components/friends-list/friends-list';
import friendsData from './components/friends-list/friends.json';

function App() {
  return (
    <Fragment>
      <h2>task 1</h2>
      <UserProfile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <h2>task 2</h2>
      <Statistics items={statsData} />
      <h2>task 3</h2>
      <FriendsList items={friendsData} />
    </Fragment>
  );
}

export default App;
