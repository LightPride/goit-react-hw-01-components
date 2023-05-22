import React from 'react';
import { FriendCard, Status, Avatar, Name } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendCard>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
};
