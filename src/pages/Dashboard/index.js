import React, { useEffect, useState, useMemo } from 'react';
import { Alert, View } from 'react-native';
import { addDays, subDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import api from '~/services/api';

import {
  Container,
  Header,
  LeftButton,
  RightButton,
  DateText,
  MeetupList,
  EmptyList,
  EmptyListText,
  SubscriptionButton,
} from './styles';

export default function Dashboard() {
  const [actualDate, setActualDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  async function handleSubscription(data) {
    try {
      await api.post('subscriptions', {
        idMeetup: data.id,
      });
      Alert.alert(
        'Sucesso',
        `Você agora está inscrito no meetup ${data.title}`
      );
    } catch (err) {
      if (err.response.status === 401) {
        Alert.alert(
          'Falha ao inscrever-se',
          `Você já está inscrito no meetup ${data.title}`
        );
      }
      Alert.alert(
        'Falha ao inscrever-se',
        `Falha ao tentar se inscrever no meetup ${data.title}`
      );
    }
  }

  function buttonComponent(item) {
    return (
      <SubscriptionButton onPress={() => handleSubscription(item)}>
        Realizar inscrição
      </SubscriptionButton>
    );
  }

  function emptyContent() {
    return <View />;
  }

  const dateFormatted = useMemo(
    () => format(actualDate, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [actualDate]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date: format(actualDate, 'yyyy-MM-dd'),
        },
      });

      setMeetups(response.data);
    }
    loadMeetups();
  }, [actualDate]);

  function handlePlusDay() {
    setActualDate(addDays(actualDate, 1));
  }

  function handleSubDay() {
    setActualDate(subDays(actualDate, 1));
  }
  return (
    <Background>
      <Container>
        <Header>
          <LeftButton onPress={handleSubDay}>
            <Icon name="chevron-left" size={30} color="#FFF" />
          </LeftButton>
          <DateText>{dateFormatted}</DateText>
          <RightButton onPress={handlePlusDay}>
            <Icon name="chevron-right" size={30} color="#FFF" />
          </RightButton>
        </Header>
        {meetups.length > 0 ? (
          <MeetupList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                data={item}
                Button={() =>
                  item.past ? emptyContent() : buttonComponent(item)
                }
              />
            )}
          />
        ) : (
          <EmptyList>
            <EmptyListText>
              Não existem Meetups cadastrados para a data
            </EmptyListText>
            <Icon name="list" size={50} color="#FFF" />
          </EmptyList>
        )}
      </Container>
    </Background>
  );
}

function SubmitIcon({ tintColor }) {
  return <Icon name="list" size={20} color={tintColor} />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: SubmitIcon,
};

SubmitIcon.propTypes = {
  tintColor: PropTypes.string,
};

SubmitIcon.defaultProps = {
  tintColor: '#FFF',
};
