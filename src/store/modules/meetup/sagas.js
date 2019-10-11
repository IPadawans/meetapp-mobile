import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import {
  listUsersMeetupSuccess,
  listUsersMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
  createMeetupSuccess,
  createMeetupFailure,
} from './actions';

export function* listUserMeetup() {
  try {
    const response = yield call(api.get, 'organizing');
    const data = response.data.map(meetup => ({
      ...meetup,
      dateFormatted: format(parseISO(meetup.date), "dd 'de' MMMM', ás' H'h'", {
        locale: pt,
      }),
      date: format(parseISO(meetup.date), "yyyy-MM-dd'T'hh:mm", {
        locale: pt,
      }),
    }));

    yield put(listUsersMeetupSuccess(data));
  } catch (err) {
    Alert.alert(
      'Erro listagem meetups',
      'Erro ao listar os meetups do usuário logado'
    );
    yield put(listUsersMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { title, description, date, location, file_id } = payload.data;
    const { id } = payload;

    const meetup = {
      title,
      description,
      date: parseISO(date),
      location,
      file_id,
    };

    const response = yield call(api.put, `meetups/${id}`, meetup);

    Alert.alert('Sucesso', 'Meetup editado com sucesso');
    yield put(updateMeetupSuccess(response.data));
    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Erro editar meetup',
      'Erro ao editar Meetup, verifique os dados informados!'
    );
    yield put(updateMeetupFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location, file_id } = payload.data;
    const meetup = {
      title,
      description,
      date: parseISO(date),
      location,
      file_id,
    };
    const response = yield call(api.post, 'meetups', meetup);

    Alert.alert('Sucesso', 'Meetup criado com sucesso');
    yield put(createMeetupSuccess(response));
    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Erro ao criar Meetup',
      'Erro ao criar Meetup, verifique os dados informados!'
    );
    yield put(createMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/LIST_USER_MEETUPS_REQUEST', listUserMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
]);
