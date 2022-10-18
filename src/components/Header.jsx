import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const Header = () => {
  const { header } = useContext(MovieContext);
 
  return <>{header}</>;
};

export default Header;
