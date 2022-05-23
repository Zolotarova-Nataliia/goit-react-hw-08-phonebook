import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/authOperations";
import {
  StyledForm,
  FormLabel,
  FormInput,
  FormBtn,
} from "../components/Phonebook.styled";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
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
        <FormBtn type="submit">Log in</FormBtn>
      </StyledForm>
    </div>
  );
}
