import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/products/productsActions";

function AddProductForm({ categories, setDataChanged, dataChanged }) {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddProduct = () => {
    setDataChanged(dataChanged+1);
    dispatch(addProduct(category, productName));
    setProductName("");
  };

  return (
    <form>
      <label>
        Product Name
        <input
          type="text"
          value={productName}
          onChange={handleProductNameChange}
          className="form-control"
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={handleCategoryChange}
          className="form-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button
        type="button"
        onClick={handleAddProduct}
        className="btn btn-primary"
        style={{ marginBottom: "5px" }}
      >
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
