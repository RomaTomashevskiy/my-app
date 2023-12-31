import PropTypes from 'prop-types';



const User = ({ name, tag, location, avatar, followers, views, likes }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                    width="100px"
                />
                <p className="name">{name}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    );
}



export default User;


User.protoTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
}