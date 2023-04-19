import React from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import ShoppingListTitle from "./components/ShoppingListTitle";
import TotalItems from "./components/TotalItems";
import AddProductForm from "./components/AddProductForm";
import Table from "./components/table/Table";

const categories = [
  "Cleaning Products",
  "Cheeses",
  "Vegetables And Fruits",
  "Meat And Fish",
  "Pastries",
];

function App() {
  const [dataChanged, setDataChanged] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingListTitle />
        <TotalItems totalItems={totalItems} />
        <AddProductForm
          categories={categories}
          setDataChanged={setDataChanged}
          dataChanged={dataChanged}
        />
        <hr />
        <p className="text-info">
          Products must be collected from the appropriate departments
        </p>
        <br></br>
        <Table
          data={categories}
          dataChanged={dataChanged}
          setTotalItems={setTotalItems}
        />
      </div>
    </Provider>
  );
}
export default App;
