export default function reducers (state = {posts: [], newPost:{}}, {type, payload}) {
  switch (type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: payload
      }
    case 'NEW_POST':
      return {
        ...state,
        posts: [payload, ...state.posts]
      }
    default:
      return state
  }
}