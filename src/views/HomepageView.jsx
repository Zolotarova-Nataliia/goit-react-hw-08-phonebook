import { useSelector } from "react-redux";
import { getUserName } from "../redux/auth/authSelectors";
import { Title } from "../components/Phonebook.styled";
export default function HomepageView() {
  const name = useSelector(getUserName);
  return (
    <div>
      <Title>Welcome to Phonebook aplication {name}!</Title>
    </div>
  );
}
