import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { StyledForm, FormLabel, FormInput, FormBtn } from "./Phonebook.styled";
const LOCAL_KEY = "contacts";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name: name,
      number: number,
    });
    reset();
  };

  const reset = () => {
    setNumber("");
    setName("");
  };

  return (
    <Fragment>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </StyledForm>
    </Fragment>
  );
}
Form.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
