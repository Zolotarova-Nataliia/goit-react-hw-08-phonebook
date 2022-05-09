import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromContacts } from "../redux/contactSlice";
import { FormText, FormList, FormListItem, FormBtn } from "./Phonebook.styled";

const Contacts = () => {
  const allContacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Fragment>
      {filteredContacts.length !== 0 ? (
        <FormList>
          {filteredContacts.map((contact) => (
            <FormListItem key={contact.name}>
              <FormText>{contact.name}:</FormText>
              <FormText>{contact.number}</FormText>
              <FormBtn
                onClick={() => dispatch(removeFromContacts(contact.name))}
              >
                Delete
              </FormBtn>
            </FormListItem>
          ))}
        </FormList>
      ) : (
        <FormText>There are no contacts</FormText>
      )}
    </Fragment>
  );
};

export default Contacts;
