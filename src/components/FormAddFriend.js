import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend() {
  const [friendName, setFriendName] = useState('');
  const [friendImage, setFriendImage] = useState(
    'https://ih1.redbubble.net/image.1446179621.9942/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
  );

  function handleFriendName(e) {
    setFriendName(e.target.value);
  }

  function handleFriendImage(e) {
    setFriendImage(e.target.value);
  }

  return (
    <form className="form-add-friend">
      <label>👭 Friend name</label>
      <input type="text" value={friendName} onChange={handleFriendName} />

      <label>🌄 Image URL</label>
      <input type="text" value={friendImage} onChange={handleFriendImage} />

      <Button>Add</Button>
    </form>
  );
}
