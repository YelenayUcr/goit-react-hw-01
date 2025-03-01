import './App.css';
import './index.css';
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
        <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App
