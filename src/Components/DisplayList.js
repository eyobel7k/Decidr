function DisplayList({
  listContainer,
  setListContainer,
  setSelectedItem,
  selectedItem,
  setCount,
  count,
  completeTask,
  newItem,
  setNewItem
}) {
  const DisplayList = listContainer.map((item, index) => (

    <li key={index} className="borderRed">
      <div className="item">
        {index + 1}. {item}
        <button
          onClick={() => {
            completeTask(index);
          }}
        >
          del
        </button>
      </div>
    </li>
  ));
  return (
    <div className="scroll">
      <ol id="display-list">{DisplayList}</ol>
    </div>
  );
}
export default DisplayList;
