export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  top_artists: null,
  spotify: null,
  playing: false,
  item: null,
//   token:
//     'BQDAAX9o6xSZ5_ZeEQb0S6VFxBGOGLf_Hv7C4OpFQAkVGYDYBwCkW7WC91f9gJDAuqk5TuORr9HSxRKEmtjitqkMOzhwdC1HXmI6YdboxgzOp4-cdnK4qf3ZtyFTws_3D5fxdSg-iL1td0qgScYIY0RcaGD3ePXYVDCJiwrUjCCIQkJR',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };

      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token,
        };

      case 'SET_PLAYING':
        return {
          ...state,
          playing: action.playing,
        };

      case 'SET_ITEM':
        return {
          ...state,
          item: action.item,
        };

      case 'SET_TOP_ARTISTS':
        return {
          ...state,
          top_artists: action.top_artists,
        };

      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token,
        };

      case 'SET_SPOTIFY':
        return {
          ...state,
          spotify: action.spotify,
        };

      case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists: action.playlists,
        };

      case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };

      default:
        return state;
    }
}

export default reducer;