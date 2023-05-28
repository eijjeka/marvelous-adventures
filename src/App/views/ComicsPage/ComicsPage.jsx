import { ComicsHero } from "../../components/ComicsPage/ComicsHero/ComicsHero";
import { ComicsFilter } from "../../components/ComicsPage/ComicsFilter/ComicsFilter";
import { useLocation } from "react-router-dom";

export const ComicsPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <ComicsHero state={pathname} />
      <ComicsFilter />
    </>
  );
};
