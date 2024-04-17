import Friend from './Friend';

export default function FriendsList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}
