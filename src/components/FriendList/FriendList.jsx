
import PropTypes from "prop-types";
import css from "./FriendList.module.css"

export const FriendList  = ({ friends }) => {
 
   const markup = (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
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
   
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
    isOnline: PropTypes.bool,
    id : PropTypes.number,
};