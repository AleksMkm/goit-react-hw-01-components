import './App.css';
import UserProfile from './components/social-profile/UserProfile';
import userData from './components/social-profile/user.json';
import Statistics from './components/statistics/Statistics';
import statsData from './components/statistics/stats.json';
import FriendsList from './components/friends-list/FriendsList';
import friendsData from './components/friends-list/friends.json';
import Transactions from './components/transactions/Transactions';
import transactionData from './components/transactions/data.json';
import Container from './components/container/Container';

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
