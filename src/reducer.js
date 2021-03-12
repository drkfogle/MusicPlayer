export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: "BQB-MB8enSEYWMXPDZdc8_CpKjkx7IGnOSQ_hh_HcGYiW-fJhW5pWO90Kkcgkg9QnQsc8t2RAXVg3Qy_3ACuIH1BT3yegJRCcdIbQQEUwMbVa8V-IO92KYllF0QKgVuYdF73X4EHpr1iGC1QUlA7gyAETIiK"
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      }
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      }
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state;
  }
}

export default reducer 