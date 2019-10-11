import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  MeetupLogo,
  MeetupTitleText,
  MeetupDate,
  MeetupDateText,
  MeetupLocation,
  MeetupLocationText,
  MeetupOrganizer,
  MeetupOrganizerText,
} from './styles';

export default function Meetup({ data, Button }) {
  console.tron.log(data);
  const dateFormatted = useMemo(
    () =>
      format(parseISO(data.date), "dd 'de' MMMM', às' HH 'h'", { locale: pt }),
    [data.date]
  );
  const organizer = `Organizador: ${data.User.name}`;

  return (
    <Container>
      <MeetupLogo
        source={{
          uri: data.File.url,
        }}
      />
      <MeetupTitleText>{data.title}</MeetupTitleText>
      <MeetupDate>
        <Icon name="event" size={20} color="#999" />
        <MeetupDateText>{dateFormatted}</MeetupDateText>
      </MeetupDate>
      <MeetupLocation>
        <IconAwesome name="map-marker" size={20} color="#999" />
        <MeetupLocationText>{data.location}</MeetupLocationText>
      </MeetupLocation>
      <MeetupOrganizer>
        <Icon name="person" size={20} color="#999" />
        <MeetupOrganizerText>{organizer}</MeetupOrganizerText>
      </MeetupOrganizer>
      <Button />
    </Container>
  );
}

Meetup.propTypes = {
  Button: PropTypes.func.isRequired,
  data: PropTypes.shape({
    past: PropTypes.bool,
    date: PropTypes.string,
    User: PropTypes.shape({
      name: PropTypes.string,
    }),
    File: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
