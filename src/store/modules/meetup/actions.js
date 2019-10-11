export function listUsersMeetupRequest() {
  return {
    type: '@meetup/LIST_USER_MEETUPS_REQUEST',
  };
}

export function listUsersMeetupSuccess(meetups) {
  return {
    type: '@meetup/LIST_USER_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function listUsersMeetupFailure() {
  return {
    type: '@meetup/LIST_USERS_MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(data, id) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data, id },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}
