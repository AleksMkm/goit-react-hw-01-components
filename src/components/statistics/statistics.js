import PropTypes from 'prop-types';
import StatItem from './StatItem';
import styles from './Statistics.module.css';

export default function Statistics({ items }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.list}>
        {items.map(item => (
          <li className={styles.item} key={item.id}>
            <StatItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
