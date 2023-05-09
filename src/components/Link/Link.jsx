import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./Link.module.css";

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
};

export default BackLink;
