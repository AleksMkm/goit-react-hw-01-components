import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

export default function FriendCard({ avatar, name, isOnline }) {
  return (
    <Fragment>
      <span className="status">{isOnline}</span>
      <img
        className="avatar"
        src={avatar}
        alt={`avatar of` + { name }}
        width="48"
      />
      <p className="name">{name}</p>
    </Fragment>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
