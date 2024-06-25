import { combineReducers } from 'redux';
import { SET_POSTS, REMOVE_POST, SET_VIEW_MODE,POST_SELECTED } from '../Action/action';

const posts = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    case REMOVE_POST:
      return state.filter(post => post.id !== action.postId);
    default:
      return state;
  }
};

const viewMode = (state = 'grid', action) => {
  switch (action.type) {
    case SET_VIEW_MODE:
      return action.viewMode;
    default:
      return state;
  }
};

const post =(state={},action)=> {
    switch (action.type) {
      case POST_SELECTED:
        return action.viewMode;
      default:
        return state;
    }
  };

export default combineReducers({
  posts,
  viewMode,
 
});
