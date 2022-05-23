import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledForm,
  FormLabel,
  FormInput,
  FormBtn,
} from "../components/Phonebook.styled";
import { register } from "../redux/auth/authOperations";

export default function RegistrationView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
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
          Email
          <FormInput
            type="text"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            value={email}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Password
          <FormInput
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            value={password}
            onChange={handleChange}
          />
        </FormLabel>
        <FormBtn type="submit">Register</FormBtn>
      </StyledForm>
    </div>
  );
}
