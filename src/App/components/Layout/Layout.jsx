import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
