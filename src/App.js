import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Contacts, Filter, Form } from "./components/index";
import { FormTitle, FormSubtitle } from "./components/Phonebook.styled";
import { addToContacts, addFilter } from "./redux/contactSlice";

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const formSubmitHandler = (data) => {
    const { name, number } = data;
    const addedContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (addedContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addToContacts({ name, number }));
  };

  const filterHandler = (event) => {
    dispatch(addFilter(event.currentTarget.value));
  };

  return (
    <div className="App">
      <Provider store={store}>
        <FormTitle>Phonebook</FormTitle>
        <Form onSubmit={formSubmitHandler}></Form>
        <FormSubtitle>Contacts</FormSubtitle>
        <Filter value={filter} onChange={filterHandler}></Filter>
        <Contacts />
      </Provider>
    </div>
  );
}
