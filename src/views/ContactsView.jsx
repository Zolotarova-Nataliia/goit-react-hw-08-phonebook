import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Contacts, Filter, Form } from "../components";
import { Title, FormSubtitle } from "../components/Phonebook.styled";
import { addContact, getContacts } from "../redux/contacts/contactsOperations";
import { getContactsList } from "../redux/contacts/contactsSelectors";
import { getFilter } from "../redux/contacts/contactsSelectors";
import { changeContactFilter } from "../redux/contacts/contactsActions";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const { contactList } = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const formSubmitHandler = (data) => {
    const { name, number } = data;
    const addedContact = contactList.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (addedContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    addContact(data);
  };

  const filterHandler = (event) => {
    dispatch(changeContactFilter(event.currentTarget.value));
  };

  return (
    <div>
      <Provider store={store}>
        <Title>Phonebook</Title>
        <Form onSubmit={formSubmitHandler}></Form>
        <FormSubtitle>Contacts</FormSubtitle>
        <Filter value={filter} onChange={filterHandler}></Filter>
        <Contacts />
      </Provider>
    </div>
  );
}
