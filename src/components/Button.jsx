import { FormBtn } from "./Phonebook.styled";
import Spinner from "react-spinkit";
import { Fragment } from "react";

export const Button = ({ loading, disabled, children, ...props }) => {
  return (
    <FormBtn {...props} disabled={disabled || loading}>
      {loading && <Spinner fadeIn="none" name="wave" color="#e98a25" />}
      {!loading && <Fragment>{children}</Fragment>}
    </FormBtn>
  );
};
