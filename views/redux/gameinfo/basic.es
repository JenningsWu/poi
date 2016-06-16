import { actions } from './action';

const initialState = {
  memberId: -1, // load from config?
  nickName: '',
  nickNameId: -1,
  exp: 0,
  level: 0,
  rank: 0,
  maxShipNum: 100,
  maxSlotitemNum: 100,
  fleetNum: 1,
};

const reducer = (state = initialState, action) => {
  const { type, body } = action;

  switch (type) {
  case actions.RESPONSE_PORT:
  case actions.RESPONSE_REQUIRE_INFO:
    return Object.assign({}, state, {
      memberId: body.api_member_id,
      nickName: body.api_nickname,
      nickNameId: body.api_nickname_id,
      exp: body.api_experience,
      level: body.api_level,
      rank: body.api_rank,
      maxShipNum: body.api_max_chara,
      maxSlotitemNum: body.api_max_slotitem,
      fleetNum: body.api_count_deck,
    });

  case actions.RESPONSE_MISSION_RESULT:
    return Object.assign({}, state, {
      exp: body.api_member_exp,
      level: body.api_member_lv,
    });

  case actions.RESPONSE_PRACTICE_BATTLE_RESULT:
  case actions.RESPONSE_BATTLE_RESULT:
    return Object.assign({}, state, {
      exp: body.api_member_exp,
      level: body.api_member_lv,
    });

  default:
    return state;
  }
};

export default reducer;
