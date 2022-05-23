import { Link, Nav } from "../Phonebook.styled";

export default function AuthNav() {
  return (
    <Nav>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log in</Link>
    </Nav>
  );
}
