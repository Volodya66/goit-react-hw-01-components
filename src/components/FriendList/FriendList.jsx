
import PropTypes from "prop-types";
import css from "./FriendList.module.css"

import FriendListItem from '../FriendListItem/FriendListItem'

export const FriendList  = ({ friends }) => {
 

   
  return (<ul className={css.list}>

    {friends.map(({  id, avatar, name, isOnline }) => {  
   return  <FriendListItem key={id}  avatar={avatar} name={name} isOnline={isOnline}    />
    }) }
  </ul>
  )
};
   
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id : PropTypes.number,
};