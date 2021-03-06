import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styles from './FriendCard.module.css';

export default function FriendCard({ avatar, name, isOnline }) {
  const activeClass = isOnline ? styles.online : styles.offline;

  return (
    <Fragment>
      <span className={[styles.status, activeClass].join(' ')}>{isOnline}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`avatar of` + { name }}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </Fragment>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
