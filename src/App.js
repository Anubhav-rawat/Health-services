import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import AddServiceForm from "./components/AddServiceForm";
import UpdateServiceForm from "./components/UpdateServiceForm";
import "./styles/App.css";

const App = () => {
  const [services, setServices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentServiceIndex(index);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service, i) =>
      i === currentServiceIndex ? updatedService : service
    );
    setServices(updatedServices);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      {!isEditing ? (
        <AddServiceForm addService={addService} />
      ) : (
        <UpdateServiceForm
          serviceToEdit={services[currentServiceIndex]}
          updateService={updateService}
          cancelEdit={cancelEdit}
        />
      )}
      <ServiceList
        services={services}
        handleDelete={deleteService}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
