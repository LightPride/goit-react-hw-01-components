import styled from '@emotion/styled';

export const FriendCard = styled.li`
  width: 150px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  background-color: rgb(255, 255, 255);
`;

export const Status = styled.span`
  content: '';
  width: 10px;
  height: 10px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'rgb(70,177,74)';
      case false:
        return 'rgb(253,83,77)';
      default:
        return;
    }
  }};
  border-radius: 50%;
  display: block;
  margin-right: 15px;
`;

export const Avatar = styled.img`
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 16px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  font-weight: 500;
`;
