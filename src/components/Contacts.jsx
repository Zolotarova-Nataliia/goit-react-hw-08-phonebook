import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormText, FormList, FormListItem, FormBtn } from "./Phonebook.styled";

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <Fragment>
      {contacts.length !== 0 ? (
        <FormList>
          {contacts.map((contact) => (
            <FormListItem key={contact.id}>
              <FormText>{contact.name}:</FormText>
              <FormText>{contact.number}</FormText>
              <FormBtn onClick={() => deleteContact(contact.id)}>
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
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteContact: PropTypes.func,
};

export default Contacts;
