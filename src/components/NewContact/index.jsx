import { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext";

export const NewContact = () => {
  const { postContact } = useContext(ApiContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    postContact(Object.fromEntries(formData));
    e.target.reset();
  };

  return (
    <>
      <h1>Create Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <label htmlFor="firstName">First name:</label>
          </p>
          <input id="firstName" name="firstName" type="text" required />
        </div>

        <div>
          <p>
            <label htmlFor="lastName">Last name:</label>
          </p>
          <input id="lastName" name="lastName" type="text" required />
        </div>

        <div>
          <p>
            <label htmlFor="street">Street:</label>
          </p>
          <input id="street" name="street" type="text" required />
        </div>

        <div>
          <p>
            <label htmlFor="city">City:</label>
          </p>
          <input id="city" name="city" type="text" required />
        </div>

        <div>
          <p>
            <button type="submit">Create</button>
          </p>
        </div>
      </form>
    </>
  );
};
