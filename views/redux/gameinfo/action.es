import keyMirror from 'keymirror';

export const actions = keyMirror({
  RESPONSE_PORT: null,
  RESPONSE_REQUIRE_INFO: null,
  RESPONSE_MISSION_RESULT: null,
  RESPONSE_PRACTICE_BATTLE_RESULT: null,
  RESPONSE_BATTLE_RESULT: null,
  RESPONSE_UNKNOWN: null,
});

export const onGameResponseAction = (detail) => {
  const {
    path,
    body,
  //  postBody,
  } = detail;

  switch (path) {
  case '/kcsapi/api_port/port':
    return {
      type: actions.RESPONSE_PORT,
      body,
    };

  case '/kcsapi/api_get_member/require_info':
    return {
      type: actions.RESPONSE_REQUIRE_INFO,
      body,
    };

  case '/kcsapi/api_req_mission/result':
    return {
      type: actions.RESPONSE_MISSION_RESULT,
      body,
    };

  case '/kcsapi/api_req_practice/battle_result':
    return {
      type: actions.RESPONSE_PRACTICE_BATTLE_RESULT,
      body,
    };

  case '/kcsapi/api_req_sortie/battleresult':
    return {
      type: actions.RESPONSE_BATTLE_RESULT,
      body,
    };

  default:
    return {
      type: actions.RESPONSE_UNKNOWN,
    };
  }
};
