const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };

    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'SET_ALERT':
      return {
        ...state,
        alert: true,
      };

    case 'CLEAR_LOADING':
      return {
        ...state,
        loading: false,
      };

    case 'CLEAR_ALERT':
      return {
        ...state,
        alert: false,
      };

    case 'CLEAR_DATA':
      return {
        ...state,
        users: [],
        user: {},
        repos: [],
      };

    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };

    case 'CLEAR_USER_DATA':
      return {
        ...state,
        repos: [],
        user: {},
      };

    default:
      return state;
  }
};

export default GithubReducer;
