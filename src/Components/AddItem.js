import { useState } from "react";

export default function AddItem({
  listContainer,
  setListContainer,
  selectedItem,
  setCount,
  count,
}) {
  const [newItem, setNewItem] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    setCount(count + 1);
    setNewItem("");
    const cleanedInput = newItem.trim().toLowerCase();
    if (newItem === "") {
      alert("Please enter an item!");
      setCount(count)
    } else if (
      listContainer.find(
        (setListContainer) => setListContainer === cleanedInput
      )
    ) {
      alert("duplicate entry, please enter a new item");
      setCount(count );
    } else if (cleanedInput.length > 0) {
      setListContainer([...listContainer, newItem.trim()]);
    }
    
  };

  return (
    <div className='Add'>
      Choose from: <span>{count} </span>items
      <form onSubmit={formSubmit} id="add-item">
        <input
          id="add-item"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          placeholder="Add an item"
        />
        {selectedItem}
        <button id="submit-item" onClick={formSubmit} >
          Add 
        </button>
      </form>
    </div>
  );
}
