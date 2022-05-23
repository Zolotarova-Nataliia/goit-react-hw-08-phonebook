import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { Link, Nav } from "../Phonebook.styled";

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
}
