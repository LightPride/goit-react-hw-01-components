import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListitem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(event => (
        <FriendListItem
          key={event.id}
          avatar={event.avatar}
          name={event.name}
          isOnline={event.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
