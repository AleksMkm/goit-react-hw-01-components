import './App.css';
import React, { Fragment } from 'react';
import UserProfile from './components/social-profile/user-profile';
import userData from './components/social-profile/user.json';
import Statistics from './components/statistics/statistics';
import statsData from './components/statistics/stats.json';
import FriendsList from './components/friends-list/friends-list';
import friendsData from './components/friends-list/friends.json';
import Transactions from './components/transactions/transactions';
import transactionData from './components/transactions/data.json';

function App() {
  return (
    <Fragment>
      <h2 className="task-title">task 1</h2>
      <UserProfile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <h2 className="task-title">task 2</h2>
      <Statistics items={statsData} />
      <h2 className="task-title">task 3</h2>
      <FriendsList items={friendsData} />
      <h2 className="task-title">task 4</h2>
      <Transactions items={transactionData} />
    </Fragment>
  );
}

export default App;
