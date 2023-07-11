// ======== DATA BASE =========\\
import user from '../data/users.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
// ==============================\\
import PersonCard from './PersonCard/PersonCard';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList/FriendsList';
import TransactionHistory from './Transaction/TransactionHistory';

const App = () => {

  const { username, tag, location, avatar } = user;
  const { followers, views, likes } = user.stats;
  
  return (
    <div>
      <PersonCard
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />

      <Statistics
        statistics={statistics}
        title="Upload stats"
      />

      <FriendsList
        friends={friends}
      />

      <TransactionHistory items={transactions} />
    </div>
  );

};

export default App;