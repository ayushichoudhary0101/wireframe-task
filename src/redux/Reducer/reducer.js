import { SET_POSTS, REMOVE_POST, SET_VIEW_MODE, POST_SELECTED } from '../Action/action';

const initialState = {
  posts: [],
  viewMode: 'list', // default view mode
  selectedPost: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      };
    case SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.viewMode,
      };
    case POST_SELECTED:
      return {
        ...state,
        selectedPost: action.post,
      };
    default:
      return state;
  }
};

export default reducer;
