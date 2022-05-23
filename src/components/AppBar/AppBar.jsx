import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { Header } from "../Phonebook.styled";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
