import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { Contacts, Filter, Form } from "./components/index";
import { FormTitle, FormSubtitle } from "./components/Phonebook.styled";
const LOCAL_KEY = "contacts";

export function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [];
  });

  const formSubmitHandler = (data) => {
    const { name, number } = data;
    const addedContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (addedContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts((prevState) => [{ name, id: nanoid(), number }, ...prevState]);
  };

  const filterHandler = (event) => {
    setFilter(event.currentTarget.value);
  };

  const findContacts = () => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };
  const deleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const findedContacts = findContacts();
  return (
    <div className="App">
      <FormTitle>Phonebook</FormTitle>
      <Form onSubmit={formSubmitHandler}></Form>

      <FormSubtitle>Contacts</FormSubtitle>
      <Filter value={contacts.name} onChange={filterHandler}></Filter>
      <Contacts
        contacts={findedContacts}
        deleteContact={deleteContact}
      ></Contacts>
    </div>
  );
}
