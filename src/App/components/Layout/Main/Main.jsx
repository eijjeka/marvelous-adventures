import { Wrapper } from "./Main.styled";
import { Outlet } from "react-router-dom";

export const Main = ({ children }) => (
  <Wrapper>
    <Outlet />
  </Wrapper>
);
