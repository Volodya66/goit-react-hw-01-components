import friends from 'DataJSON/friends.json'
import {CreateMarkupFriends} from './CreateFriendsList/FriendsList'

export const RenderFriendsList = () => {
    return (
        <div className="friend-list"
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                // flexDirection: "column",
                alignItems: 'center',
                fontSize: 40,
                color: '#010101'
            }}>
            <CreateMarkupFriends events={friends} />
        </div>)
}