import { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext";

import { useLocation, useNavigate } from "react-router-dom";

export const EditContact = () => {
  const { updateContact } = useContext(ApiContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const update = Object.fromEntries(formData);
    updateContact(state.contact.id, update);

    const contact = state.contact;

    navigate(`/view-contact/${state.contact.id}`, { state: { contact } });
  };

  return (
    <>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <label htmlFor="firstName">First name:</label>
          </p>
          <input
            id="firstName"
            name="firstName"
            type="text"
            defaultValue={state.contact.firstName}
          />
        </div>

        <div>
          <p>
            <label htmlFor="lastName">Last name:</label>
          </p>
          <input
            id="lastName"
            name="lastName"
            type="text"
            defaultValue={state.contact.lastName}
          />
        </div>

        <div>
          <p>
            <label htmlFor="street">Street:</label>
          </p>
          <input
            id="street"
            name="street"
            type="text"
            defaultValue={state.contact.street}
          />
        </div>

        <div>
          <p>
            <label htmlFor="city">City:</label>
          </p>
          <input
            id="city"
            name="city"
            type="text"
            defaultValue={state.contact.city}
          />
        </div>

        <div>
          <p>
            <button type="submit">Edit</button>
          </p>
        </div>
      </form>
    </>
  );
};
