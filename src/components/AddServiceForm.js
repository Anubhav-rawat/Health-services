import React, { useState } from "react";

const AddServiceForm = ({ addService }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      addService({ name, description, price });
      setName("");
      setDescription("");
      setPrice("");
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Service</h3>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
