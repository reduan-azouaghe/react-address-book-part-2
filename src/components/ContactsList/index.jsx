/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../contexts/ApiContext";

export const ContactsList = () => {
  const { contacts } = useContext(ApiContext);

  return (
    <>
      <h1> Contacts</h1>

      {contacts.map((contact, index) => (
        <div key={`${contact.id}-${index}`}>
          {`${contact.firstName} ${contact.lastName}`}{" "}
          <Link to={`/view-contact/${contact.id}`} state={{ contact }}>
            View
          </Link>{" "}
          <Link to={`/edit-contact/${contact.id}`} state={{ contact }}>
            Edit
          </Link>
        </div>
      ))}
    </>
  );
};
