import Friend from './Friend';

export default function FriendsList({ friends, onSelection, selected }) {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <Friend
            friend={friend}
            key={friend.id}
            selected={selected}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
}
