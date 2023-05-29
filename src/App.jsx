import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import "./App.css";

function App() {
  //state hook
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  //add item function
  function addItem() {
    if (!newItem) {
      alert("Enter a list! ");

      return;
    }
    //create random id
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    //set new Array
    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  //add delete function
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <>
      <h1>Todolist</h1>
      <input
        type="text"
        placeholder="add to list..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()} id="btnAdd">
        Add
      </button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <BiTrash onClick={() => deleteItem(item.id)} id="btnDelete" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
