import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
  
    <li className={styles.item}>
       <div key={id}>
      <img className={styles.avatar} src={avatar} alt="Friend avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
        </span>
        </div>
    </li>

  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default FriendListItem;
