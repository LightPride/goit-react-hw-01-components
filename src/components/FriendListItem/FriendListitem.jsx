import React from 'react';
import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar, Name } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
