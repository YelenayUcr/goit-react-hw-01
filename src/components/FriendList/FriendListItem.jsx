import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.container}>
    <li className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Friend avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </li>
   </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
