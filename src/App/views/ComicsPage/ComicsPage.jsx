import { ComicsHero } from "./../../components/ComicsHero/ComicsHero";
import { ComicsFilter } from "./../../components/ComicsFilter/ComicsFilter";
import { Link, useLocation } from "react-router-dom";

export const ComicsPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <ComicsHero state={pathname} />
      <ComicsFilter />
    </>
  );
};
