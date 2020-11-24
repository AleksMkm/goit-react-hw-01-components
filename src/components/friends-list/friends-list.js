import PropTypes from 'prop-types';
import FriendCard from './friend-card';

export default function FriendList({ items }) {
  return (
    <section className="friends">
      <ul className="friends-list">
        {items.map(item => (
          <li key={item.id}>
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
