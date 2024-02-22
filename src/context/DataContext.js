import React, { createContext, useState, useEffect } from "react";

const dataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Initialize items state from local storage
    const storedItems = JSON.parse(localStorage.getItem("todo_list")) || [];
    setItems(storedItems);
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <dataContext.Provider
      value={{
        items,
        setItems,
        newItem,
        setNewItem,
        search,
        setSearch,
        addItem,
        handleCheck,
        handleDelete,
        handleSubmit,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
