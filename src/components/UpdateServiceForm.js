import React, { useState } from "react";

const UpdateServiceForm = ({ serviceToEdit, updateService, cancelEdit }) => {
  const [name, setName] = useState(serviceToEdit.name);
  const [description, setDescription] = useState(serviceToEdit.description);
  const [price, setPrice] = useState(serviceToEdit.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService({ name, description, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Service</h3>
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
      <button type="submit">Update</button>
      <button type="button" onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateServiceForm;
