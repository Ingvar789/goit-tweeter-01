import PropTypes from "prop-types";
import css from "./Card.module.css";
import goitLogo from "../../images/goit-logo.svg";

export default function Card(props) {
  const { user, tweets, followers, isfollowing, avatar, onHandleClick } = props;

  function numberWithSeparator(num) {
    if (num < 1000) return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={css.card}>
      <img src={goitLogo} alt="GoIt Logo" className={css.cardLogo} />
      <div className={css.cardImgWrapper}>
        <img src={avatar} alt={user} className={css.cardImg} />
      </div>
      <div className={css.cardDelimiter}></div>
      <div className={css.cardData}>
        <p className={css.cardTxt}>{numberWithSeparator(tweets)} tweets</p>
        <p className={css.cardTxt}>
          {numberWithSeparator(followers)} followers
        </p>
        {isfollowing ? (
          <button className={css.cardButtonFollowing} onClick={onHandleClick}>
            following
          </button>
        ) : (
          <button className={css.cardButton} onClick={onHandleClick}>
            follow
          </button>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  isfollowing: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};
