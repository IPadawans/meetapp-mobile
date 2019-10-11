import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import {
  Container,
  MeetupList,
  EmptyList,
  EmptyListText,
  CancelButton,
} from './styles';

function Subscriptions({ isFocused }) {
  const [meetups, setMeetups] = useState([]);

  async function loadMeetups() {
    const response = await api.get('subscriptions');
    setMeetups(response.data);
  }

  useEffect(() => {
    loadMeetups();
  }, [isFocused]);

  async function handleCancelSubscription(data) {
    try {
      await api.delete(`subscriptions/${data.id}`);
      Alert.alert(
        'Sucesso',
        `Você não está mais inscrito no meetup ${data.title}`
      );
      loadMeetups();
    } catch (err) {
      Alert.alert(
        'Falha ao inscrever-se',
        `Falha ao tentar se inscrever no meetup ${data.title}`
      );
    }
  }

  function buttonComponent(item) {
    return (
      <CancelButton onPress={() => handleCancelSubscription(item)}>
        Cancelar inscrição
      </CancelButton>
    );
  }

  return (
    <Background>
      <Container>
        {meetups.length > 0 ? (
          <MeetupList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup data={item.Meetup} Button={() => buttonComponent(item)} />
            )}
          />
        ) : (
          <EmptyList>
            <EmptyListText>Você não possui nenhuma inscricão</EmptyListText>
            <Icon name="list" size={50} color="#FFF" />
          </EmptyList>
        )}
      </Container>
    </Background>
  );
}

function SubmitIcon({ tintColor }) {
  return <AntIcon name="tag" size={20} color={tintColor} />;
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: SubmitIcon,
};

SubmitIcon.propTypes = {
  tintColor: PropTypes.string,
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

SubmitIcon.defaultProps = {
  tintColor: '#FFF',
};

export default withNavigationFocus(Subscriptions);
