export default function reducers (state = {posts: [], newPost:{}}, {type, playload}) {
  switch (type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: playload
      }
    case 'NEW_POST':
      return {
        ...state,
        posts: [playload, ...state.posts]
      }
    default:
      return state
  }
}