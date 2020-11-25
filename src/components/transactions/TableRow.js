import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

export default function TableRow({ type, amount, currency }) {
  return (
    <Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Fragment>
  );
}

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
