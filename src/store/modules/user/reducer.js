import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@user/LIST_USER_MEETUPS_SUCCESS': {
        draft.meetups = action.payload.meetups;
        break;
      }
      case '@user/SIGN_OUT': {
        draft.profile = null;
        draft.meetups = null;
        break;
      }
      default:
    }
  });
}
