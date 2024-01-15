import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PakingList from "./components/PakingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelClearItem() {
    const confirmed = window.confirm(
      "Are You Sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PakingList
        items={items}
        onDeleteItem={handelDeleteItems}
        onToggleItem={handelToggleItem}
        onClearItem={handelClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
