import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 15px;
`;
export const MeetupLogo = styled.Image`
  width: 100%;
  height: 150px;
`;
export const MeetupTitleText = styled.Text`
  margin: 20px 0 10px 15px;
  font-weight: bold;
  color: #000;
  font-size: 20px;
`;
export const MeetupDate = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 10px 15px;
`;

export const MeetupDateText = styled.Text`
  margin-left: 5px;
  color: #999;
`;

export const MeetupLocation = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 10px 17px;
`;

export const MeetupLocationText = styled.Text`
  margin-left: 12px;
  color: #999;
`;

export const MeetupOrganizer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 10px 13px;
`;
export const MeetupOrganizerText = styled.Text`
  margin-left: 7px;
  color: #999;
`;
