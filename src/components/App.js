import { useState } from 'react';
import Button from './Button';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import FriendsList from './FriendsList';

export default function App() {
  const [showAddFriend, setshowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setshowAddFriend(!showAddFriend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
