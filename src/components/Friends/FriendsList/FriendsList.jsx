import Frienditem from "../FriendItem/FriendItem";


const FriendsList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <Frienditem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </ul>
    )
};


export default FriendsList;