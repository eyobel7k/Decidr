import "./App.css";
import { useState } from "react";
import AddItem from "./Components/AddItem";
import DisplayList from "./Components/DisplayList";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Petemoss&display=swap');
</style>;

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [count, setCount] = useState(0);
  const [errorWarning, setErrorWarning] = useState(" Add At Least Two Items");
  const [itemWarning, setItemWarning] = useState("Add At Least Two Items");

  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem(
      listContainer.length > 1 ? listContainer[random] : errorWarning
    );

    setItemWarning("");
  };

  const completeTask = (index) => {
    let copyOfArray = [...listContainer];
    copyOfArray.splice(index, 1);
    setListContainer(copyOfArray);
    setCount(count - 1);
  };
  const clearAll = (index) => {
    let copyOfArray = [...listContainer];
    copyOfArray.splice(index);
    setListContainer(copyOfArray);
    setSelectedItem("");
    setCount(0);
    setItemWarning(errorWarning);
  };

  return (
    <div className="App">
      <header>
        <h1>DECIDR</h1>
      </header>

      <AddItem
        listContainer={listContainer}
        setListContainer={setListContainer}
        completeTask={completeTask}
        setCount={setCount}
        count={count}
      />

      <main>
      {listContainer.length < 2 && (
          <div className="item-warning">{itemWarning}</div>
        )}

        {selectedItem.length > 0 ? (
          <p id="selected"> {selectedItem} </p>
        ) : (
          <DisplayList
            listContainer={listContainer}
            setListContainer={setListContainer}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setCount={setCount}
            completeTask={completeTask}
          />
        )}
      </main>
      <footer>
        <div className="btn">
          <button id="btn-select" onClick={() => selectItem()} type="text">
            Selected Item
          </button>
          <button onClick={() => clearAll()} type="text">
            Clear All
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
