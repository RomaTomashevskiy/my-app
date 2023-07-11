
const Frienditem = ({ avatar, name, isOnline }) => {
    return <li className="item">
        <span className="status">{isOnline ? 'True' : 'False'}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
};


export default Frienditem;