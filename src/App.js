import './App.css';
import React, { Fragment } from 'react';
import UserProfile from './components/social-profile/user-profile';
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/statistics';
import statsData from './components/statistics/stats.json';

function App() {
  return (
    <Fragment>
      <h2>task 1</h2>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>task 2</h2>
      <Statistics items={statsData} />
    </Fragment>
  );
}

export default App;
