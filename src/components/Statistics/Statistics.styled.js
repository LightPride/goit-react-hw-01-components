import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: white;
  display: block;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(232, 237, 243);
  border-radius: 5px;
  margin-top: 30px;
  text-align: center;
`;

export const Title = styled.h2`
  padding-top: 25px;
  padding-bottom: 25px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: black;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100px;
  padding: 10px;

  background-color: ${props => {
    switch (props.label) {
      case '.docx':
        return 'rgb(80,196,247)';
      case '.pdf':
        return 'rgb(162,61,247)';
      case '.mp3':
        return 'rgb(229,76,104)';
      case '.psd':
        return 'rgb(32,184,197)';
      default:
        return;
    }
  }};
`;

export const Label = styled.span`
  font-size: 15px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 18px;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: black;
  font-weight: bold;
  color: white;
`;
