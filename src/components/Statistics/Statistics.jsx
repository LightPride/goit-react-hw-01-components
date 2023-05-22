import React from 'react';
import PropTypes from 'prop-types';
import {
  StatItem,
  StatList,
  Title,
  StatSection,
  Label,
  Percentage,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} label={label}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
