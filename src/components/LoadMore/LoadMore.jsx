import PropTypes from "prop-types";
import css from "./LoadMore.module.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className={css.loadMore}>
      Load more
    </button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
