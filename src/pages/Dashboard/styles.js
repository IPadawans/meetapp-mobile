import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: stretch;
`;

export const LeftButton = styled.TouchableOpacity`
  margin-right: 50px;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const RightButton = styled.TouchableOpacity`
  margin-left: 50px;
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

export const SubscriptionButton = styled(Button)`
  width: 90%;
  margin: 20px 0;
  align-self: center;
`;
