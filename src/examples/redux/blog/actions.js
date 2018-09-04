import axios from 'axios'

export const fetchPosts = () => {
  return function(dispatch) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({data}) => {
        dispatch({
          type: 'FETCH_POSTS',
          payload: data
        })
      })
      .catch( e => {
        dispatch({
          type: 'FETCH_POSTS',
          payload: []
        })
      })
  }
}

export const createPost  = (post) => (dispatch) => {
  axios
    .post('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'content-type': 'application/json'
      },
      post: post
    })
    .then( ({data}) => {
      dispatch({
        type: 'NEW_POST',
        payload: data
      })
    })
    .catch(e => {
      console.log(`get: https://jsonplaceholder.typicode.com/posts`)
      dispatch({
        type: 'NEW_POST',
        payload: {}
      })
    })
}

export const showSpinner = dispatch => {
  return function (dispath) {
    dispatch({
      type: 'SHOW_SPINNER'
    })
  }
}
