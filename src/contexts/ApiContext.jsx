import { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/api";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_BASE_URL + "contact");
      const jsonData = await response.json();
      setContacts(jsonData);
    };
    fetchData();
  }, [triggerFetch]); //Triggers useEffect on mount and on post

  const postContact = async (contact) => {
    await apiFetch("contact", {
      method: "POST",
      body: JSON.stringify(contact),
    });
    setTriggerFetch(triggerFetch + 1);
  };

  const deleteContact = async (contact) => {
    await apiFetch(`contact/${contact.id}`, {
      method: "DELETE",
    });
    setTriggerFetch(triggerFetch + 1);
  };

  const updateContact = async (id, contact) => {
    await apiFetch(`contact/${id}`, {
      method: "PUT",
      body: JSON.stringify(contact),
    });
    setTriggerFetch(triggerFetch + 1);
  };

  const getContactLocal = (id) => {
    return contacts.find(c => c.id === id)
  }

  return (
    <ApiContext.Provider
      value={{ contacts, postContact, deleteContact, updateContact, getContactLocal }}
    >
      {children}
    </ApiContext.Provider>
  );
};

const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
