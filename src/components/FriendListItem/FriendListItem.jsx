import css from './FriendListItem.module.css'

export default function FriendListItem ({ avatar, name, isOnline}) {

    return (
    <li className={css.item} key={avatar}>
        <span className={css[isOnline]}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
)

}