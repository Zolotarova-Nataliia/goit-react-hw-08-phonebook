import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { getUserName } from "../../redux/auth/authSelectors";
import { FormBtn, ElementsWrap, UserWrap, UserPic } from "../Phonebook.styled";
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <ElementsWrap>
      <UserWrap>
        <p>Hello, sweetie {name} </p>
        <UserPic
          src={process.env.PUBLIC_URL + "/avatar.png"}
          alt="avatar"
          width={30}
          height={30}
        />
      </UserWrap>

      <FormBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </FormBtn>
    </ElementsWrap>
  );
}
