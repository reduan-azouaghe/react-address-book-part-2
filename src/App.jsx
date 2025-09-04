import "./App.css";
import { ContactsList } from "./components/ContactsList";
import { Link, Route, Routes } from "react-router-dom";
import { NewContact } from "./components/NewContact";
import { ViewContact } from "./components/ViewContact";
import { EditContact } from "./components/EditContact";

function App() {

  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <h1 className="component-title">MENU</h1>
        <ul>
          <li>
            <Link to={"/"}>Contacts List</Link>
          </li>
          <li>
            <Link to={"/new-contact"}>Add New Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex-item-right">
        <Routes>
          <Route path="/" element={<ContactsList/>} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="/view-contact/:id" element={<ViewContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
