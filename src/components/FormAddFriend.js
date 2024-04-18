import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleOnSubmit(e) {
    e.preventDefault();

    // Guard clause to prevent excution if no name/image
    if (!name || !image) return;

    const id = crypto.randomUUID();
    onAddFriend({
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    });

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form className="form-add-friend" onSubmit={handleOnSubmit}>
      <label>👭 Friend name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
