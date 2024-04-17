import Button from './Button';

export default function FormSplitBill({ selected }) {
  return (
    <form className="form-split-bill">
      <h2>split a bill with {selected.name}</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👭 {selected.name}'s expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
