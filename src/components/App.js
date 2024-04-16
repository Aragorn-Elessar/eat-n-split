import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendsList';

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <button className="button">Add Friend</button>
      </div>
    </div>
  );
}
