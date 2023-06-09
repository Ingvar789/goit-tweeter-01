import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

import PropTypes from "prop-types";

export default function Loader({ waitingNote }) {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <p>{waitingNote}</p>
    </div>
  );
}

Loader.propTypes = {
  waitingNote: PropTypes.string.isRequired,
};
