import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  position: relative;
  display: inline-block;
  color: #fab427;
  font-size: 26px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background: #fab427;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 30vw;
  justify-content: space-around;
`;

export const FormSubtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #fab427;
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
  border: 1px solid #fab427;
  font-family: "Montserrat", sans-serif;
  color: #fab427;
  font-size: 14px;
  height: 30px;
  padding: 5px 20px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #e98a25;
    border: 1px solid #e98a25;
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

export const SpinnerWrap = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const Header = styled.header`
  width: 100vw;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  padding: 12px 0;
  color: #fff;
  -webkit-box-shadow: 0 1px 4px rgb(250, 162, 39),
    0 0 40px rgb(250, 162, 39) inset;
  -moz-box-shadow: 0 1px 4px rgb(250, 162, 39), 0 0 35px rgb(250, 162, 39) inset;
  box-shadow: 0 1px 4px rgb(250, 162, 39), 0 0 35px rgb(250, 162, 39) inset;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-box-shadow: 0 0 15px rgb(250, 162, 39);
    -moz-box-shadow: 0 0 15px rgb(250, 162, 39);
    box-shadow: 0 0 15px rgb(250, 162, 39);
    top: 0;
    bottom: 0;
    left: 10px;
    -moz-border-radius: 100px / 10px;
    border-radius: 100px / 10px;
  }
`;

export const ElementsWrap = styled.div`
  display: flex;
  width: 30vw;
  align-items: center;
  justify-content: space-around;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPic = styled.img`
  margin-left: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  color: #ffffffff;
  transition: color 500ms;
  &:hover {
    color: #e98a25;
    text-shadow: 2px 2px 5px #ffff 2px 2px 5px #e98a25;
  }
  &.active {
    color: rgb(250, 162, 39);
    text-shadow: 2px 2px 5px #ffff 2px 2px 5px #e98a25;
  }
`;
