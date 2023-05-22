import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  padding-top: 24px;
  background-color: white;
  display: block;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(232, 237, 243);
  border-radius: 5px;
  margin-top: 30px;
`;

export const Descritpion = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const Username = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: black;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: grey;
  font-weight: 500;
`;

export const Location = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: grey;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100px;
  border: 1px solid rgb(232, 237, 243);
  padding-bottom: 5px;
  padding-top: 5px;
  background-color: rgb(243, 246, 249);
`;

export const Label = styled.span`
  font-size: 18px;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;

export const Quantity = styled.span`
  font-size: 18px;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: black;
  font-weight: bold;
`;
