import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormLabel, FormInput } from "./Phonebook.styled";

const Filter = ({ value, onChange }) => {
  return (
    <Fragment>
      <FormLabel>
        Find contacts by name
        <FormInput
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={value}
          onChange={onChange}
        />
      </FormLabel>
    </Fragment>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
