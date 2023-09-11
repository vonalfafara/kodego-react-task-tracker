import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onShowAdd, showAdd }) => {
  const location = useLocation();
  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === "/" ? (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Hide Form" : "Show Add Form"}
          onClick={onShowAdd}
        />
      ) : null}
    </div>
  );
};

Header.defaultProps = {
  title: "This is the default value for the prop 'title'",
};

export default Header;
