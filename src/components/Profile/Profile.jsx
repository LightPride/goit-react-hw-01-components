import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  Descritpion,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  StatsLi,
  Label,
  Quantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Descritpion>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Descritpion>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsLi>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
