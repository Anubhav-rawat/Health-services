import React from "react";

const ServiceList = ({ services, handleDelete, handleEdit }) => {
  return (
    <div>
      <h2>Healthcare Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {service.name}
            </div>
            <div>
              <strong>Description:</strong> {service.description}
            </div>
            <div>
              <strong>Price:</strong> ${service.price}
            </div>
            <button onClick={() => handleEdit(index)}>✏️ Edit</button>
            <button onClick={() => handleDelete(index)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
