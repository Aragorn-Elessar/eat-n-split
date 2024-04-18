import { useState } from 'react';
import Button from './Button';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import FriendsList from './FriendsList';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleShowAddFriend() {
    setshowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setshowAddFriend(false);
  }

  function handleSelection(friend) {
    // Used optional chaining to prevent error by short circuiting
    // Cannot read properties of null
    setSelected(cur => (cur?.id === friend.id ? null : friend));
    setshowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map(friend =>
        friend.id === selected.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selected={selected}
          onSelection={handleSelection}
        />

        {showAddFriend && (
          <FormAddFriend friends={friends} onAddFriend={handleAddFriend} />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>

      {selected && (
        <FormSplitBill selected={selected} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}
