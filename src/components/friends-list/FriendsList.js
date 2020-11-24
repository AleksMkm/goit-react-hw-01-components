import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import styles from './FriendsList.module.css';

export default function FriendList({ items }) {
  return (
    <section className={styles.friends}>
      <ul className={styles.list}>
        {items.map(item => (
          <li className={styles.item} key={item.id}>
            <FriendCard
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
