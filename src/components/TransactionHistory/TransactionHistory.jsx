import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <TableRow key={id}>
              <TableData index={index}>I{type}</TableData>
              <TableData index={index}>{amount}</TableData>
              <TableData index={index}>{currency}</TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
