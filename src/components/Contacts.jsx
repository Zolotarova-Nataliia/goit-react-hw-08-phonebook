import { React } from "react";
import Spinner from "react-spinkit";
import { useSelector, useDispatch } from "react-redux";
import {
  FormText,
  FormList,
  FormListItem,
  SpinnerWrap,
} from "./Phonebook.styled";
import { Button } from "./Button";
import * as selectors from "../redux/contacts/contactsSelectors";
import { deleteContact } from "../redux/contacts/contactsOperations";

const Contacts = () => {
  const { contactList, isLoading } = useSelector(selectors.getContactsList);
  const filter = useSelector(selectors.getFilter);
  const isDeleting = useSelector(selectors.getIsDeleting);
  const dispatch = useDispatch();
  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (isLoading) {
    return (
      <SpinnerWrap>
        <Spinner name="ball-spin-fade-loader" color="#e98a25" />
      </SpinnerWrap>
    );
  }
  if (filteredContacts.length === 0) {
    <FormText>There are no contacts</FormText>;
  }

  return (
    <FormList>
      {filteredContacts.map((contact) => (
        <FormListItem key={contact.name}>
          <FormText>{contact.name}:</FormText>
          <FormText>{contact.number}</FormText>
          <Button
            loading={isDeleting[contact.id]}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </FormListItem>
      ))}
    </FormList>
  );
};

export default Contacts;
