import './App.css';
import UserProfile from './components/social-profile/user-profile';
import user from './components/social-profile/user.json';

function App() {
  return (
    <div>
      <h2>task 1</h2>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
