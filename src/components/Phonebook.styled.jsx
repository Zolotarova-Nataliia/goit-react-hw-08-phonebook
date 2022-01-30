import styled from "styled-components";

export const FormTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  position: relative;
  display: flex;
  color: #fcf1b1;
  font-size: 26px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background: #fcf1b1;
  }
`;

export const FormSubtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #fcf1b1;
  font-size: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-items: center;
  flex-direction: column;
  padding: 30px;
`;

export const FormLabel = styled.label`
  margin-bottom: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #ffff;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-bottom-color: #ddd;
  }
`;

export const FormBtn = styled.button`
  background: none;
  border: 1px solid #fcf1b1;
  font-family: "Montserrat", sans-serif;
  color: #fcf1b1;
  font-size: 14px;
  height: 30px;
  padding: 5px 20px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #ecdf90;
    border: 1px solid #ecdf90;
  }
`;

export const FormText = styled.p`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #ffff;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 15px;
`;

export const FormList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const FormListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 50px;
`;
