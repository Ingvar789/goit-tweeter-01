import css from "./Notification.module.css";

import PropTypes from "prop-types";

export default function Warning({ message }) {
  return (
    <section className={css.notification}>
      <p>{message}</p>
    </section>
  );
}

Warning.propTypes = {
  message: PropTypes.string.isRequired,
};
