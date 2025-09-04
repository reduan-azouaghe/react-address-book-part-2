import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../../contexts/ApiContext";

export const ViewContact = () => {
  const { state } = useLocation();
  const { deleteContact } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleDelete = (contact) => {
    console.log(state);
    deleteContact(contact);
    navigate("/");
  };

  return (
    <>
      <h1>{`${state.contact.firstName} ${state.contact.lastName}`}</h1>
      <p>{`${state.contact.street}, ${state.contact.city}`}</p>
      <button onClick={() => handleDelete(state.contact)}>Delete</button>
    </>
  );
};
