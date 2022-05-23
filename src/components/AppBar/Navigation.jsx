import { Link, Nav } from "../Phonebook.styled";

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </Nav>
  );
}
