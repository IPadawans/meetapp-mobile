import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
})``;

export const EmptyList = styled.View`
  margin-top: 100px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const EmptyListText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
  margin: 0px 20px 50px;
`;

export const CancelButton = styled(Button)`
  background: #f64575;
  width: 90%;
  margin: 20px 0;
  align-self: center;
`;
