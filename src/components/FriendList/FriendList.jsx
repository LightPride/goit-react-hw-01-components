import React from 'react';
import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListitem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(event => (
        <FriendListItem
          key={event.id}
          avatar={event.avatar}
          name={event.name}
          isOnline={event.isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
