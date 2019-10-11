import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LIST_USER_MEETUPS_SUCCESS': {
        draft.meetups = action.payload.meetups;
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        const { meetup } = action.payload;
        const { meetups } = draft;
        draft.meetups = meetups.map(meet => {
          if (meet.id === meetup.id) {
            return meetup;
          }
          return meet;
        });
        break;
      }
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        const { meetup } = action.payload;
        draft.meetups = [...draft.meetups, meetup];
        break;
      }
      case '@user/SIGN_OUT': {
        draft.meetups = null;
        break;
      }
      default:
    }
  });
}
