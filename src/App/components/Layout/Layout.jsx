import { Header } from "./Header";
// import { Main } from "./Main";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
