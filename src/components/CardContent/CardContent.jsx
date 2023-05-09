import css from "./CardContent.module.css";

import PropTypes from "prop-types";

export default function Info({ message }) {
  return (
    <section className={css.info}>
      <p>{message}</p>
    </section>
  );
}

Info.propTypes = {
  message: PropTypes.string.isRequired,
};
