
import PropTypes from "prop-types";
import css from "./Friends.module.css"

export const CreateMarkupFriends = ({events}) => {
   const markup = (
    <ul className={css.list}>
      {events.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span className={css[isOnline]}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );

  return markup;
};
   
CreateMarkupFriends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
    isOnline: PropTypes.number.isRequired,
    id : PropTypes.number.isRequired,
};