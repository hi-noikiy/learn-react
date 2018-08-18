# Redux Course From GeekBang

## Why Redux

cross components communications.

Abstract common state to a store object. As components communicate with store to reduce the cross communications among components.

### Three features of Redux

- Single Source of Truth

- can be predicted (immunibility)

**Only action can change the state of App.**

```javascript
function reducer (state = {count: 0}, {type, playload}) {
  case 'INCREASE':
    return {
      ...state,
      count: state.count + playload
    }
  default:
    return state
}
```

**reducer** here is a pure function.

- Update store by a pure function(reducer)

(In reality, creating a new store by pure function insteadof updating the old one).

## core concepts for redux

### Store

```javascript
const store = createStore(reducer)
```

#### three methods of store object

- getState()

- dispatch(action) (dispatch to reducer)

- subscribe(listener)

[redux store](./includes/img/01.about_store.png)

### action

```javascript
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

```javascript
// reducers
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({ }, state, {
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      })
      break
    default:
      return state
      break
  }
}
```

### tool

- combineReducers

```javascript
import { combineReducers } from 'redux'

function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return state.concat(action.text)
      break

  }
}

function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
      break
    case 'DECREMENT':
      return state + 1
      break
    default:
      break
  }
}

export default combineReducers({
  todos,
  counter
})
```

- bindActionCreators

dispatch(action)

```javascript
function bindActionCreateor(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}

function bindActionCreators(actionCreators, dispatch) {
  const keys = Object.keys(actionCreators)

  const boundActionCreators = {}

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreateor(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
```