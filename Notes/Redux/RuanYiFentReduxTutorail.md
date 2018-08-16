# Redux

**You may not need redux unless there are  multiple resources and complicated  interactions in your app.**

- complicated user operation

- multiple roles control (like admin account and odinary account)

- the view gets resource from multiple resource

- complicated interaction with server or websocket is used

## Design philosophy

- The web application is a state machine, the view and the state are in one-to-one correspondence.

- All states are stored in an object.

## Basic concepts and core API

### Store

Store is a container to store data. An Applicaition only exsits one Store.
Create a store by **createStore**, which is imported from **redux**.

```javascript
import { createStore } from 'redux'
const store = createStore(fn)
```

### State

State is a snapchat of Store at a point of time. We can get state by **store.getState()**.

```javascript
import { createStore } from 'redux'

// fn is a reducer
const store = createStore(fn)
const state =  store.getState()
```

### Action

Changes of State leads to the changes of view. As user can not access state and can access to view, so the changes of state comes from view. Action comes from view, which means there will be change for state.
An example of action.

```javascript
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
}
```

### Action Creator

The function creates action

```javascript
const ADD_TODO = 'ADD_TODO'

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

### store.dispatch

**store.dispatch** is the only way for view to send an action.

```javascript
import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
})
```

### Reducer

Reducer is a function that accepts current state and action as params. It returns a new state.

```javascript
const reducer = function (state, action) {
  return new_state;
}
```

### Pure function

### store.subscribe

Store allows **store.subscribe** to set lisntener function, whenvere there is achange for state, lisntener will excute automatically.

```javascript
import { createStore } from 'redux'
const store = createStore(reducer)
store.subsribe(lisntener)
```

## The implemention of Store

As the basic concept of redux mentioned above, there three basic functions for Store:

- store.dispatch()

- store.getState

- store.subscribe()

```javascript
import { createStore } from 'redux'
let { subscribe, dispatch, getState } = createStore(reducer, [initialState])
```

A simplified code for store:

```javascript
const createStore = (reducer) => {
  let state;
  let listeners = []

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  dispatch({})

  return { getState, dispatch, subscribe }
}
```

## More about  Reducer

An exapmple of a reducer

```javascript
const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT:
      return Object.assign({}, state, {
        chatLog: state.chatLog.concat(payload)
      });
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        statusMessage: payload
      });
    case CHANGE_USERNAME:
      return Object.assign({}, state, {
        userName: payload
      });
    default: return state;
  }
}
```

As the three actiosn above do not have relation with each other, we can split them into three seperarted reducers:

```javascript
const chatReducer = (state = defaultState, action = {}) => {
  return {
    chatLog: chatLog(state.chatLog, action),
    statusMessage: statusMessage(state.statusMessage, action),
    userName: userName(state.userName, action)
  }
}
```

There is a function caled ***combineReducers**, which helps u to combine all the reducers into one.

A simplified reducer code:

```javascript
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce (
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      },git 
      {}
    )
  }
}
```

## Working flow of redux

[working flow of redux](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

Counter, an example of redux.

```javascript
import React, { Component } from 'react'
import { createStore } from 'redux'
import  './index.css'

const Counter = ({value, onIncrement, onDecrement}) => (
  <div className="Counter">
    <h1 className="value">{value}</h1>
    <div className="button-group">
      <button className="btn" onClick={onIncrement}>+</button>
      <button className="btn" onClick={onDecrement}>-</button>
    </div>
  </div>
)

// reduers, which return a new state
const reducers = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

// create a store with reducer as params
export const store = createStore(reducers)

export default class App extends Component {
  // store.getState , get the state from store
  render() {
    return (
      <div className="App">
        <Counter
          value={store.getState()}
          onIncrement={() => {
            store.dispatch({
              type: 'INCREMENT'
            })
          }}

          onDecrement={
            () => {
              // dispatch an action to change the sate of app
              store.dispatch({
                type: 'DECREMENT'
              })
            }
          }
        ></Counter>
      </div>
    )
  }
}
```

Subscribe state change:

```javascript
import App form './components/Counter'
import { store } from './components/Counter'

const render = () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
}
// render
render()

// subscribe change to state. So whenever there is a change, render excutes automatically.
store.subscribe(render)
```

## Redux middleware and async operation

An example of middleware's solution:

```javascript
let next = store.dispatch
store.dispatch = dispatchAndLog(action) {
  console.log('dispatching', action)
  next(action)
  console.log('next state', store.getState())
}
```

### Redux middleware

```javascript
import { applyMiddleWare, createStore } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger()
const store = createStore(
  reducer,
  // initialState,
  applyMiddleWare(logger)
)
```

#### what applyMiddleware is about

```javascript
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    var store = createStore(reducer, preloadedState, enhancer);
    var dispatch = store.dispatch;
    var chain = [];

    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    };
    chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {...store, dispatch}
  }
}
```

### thinking in async operation of redux

#### redux-thunk

## React-Redux

There are two types of components for **React-Redux**. The first one is  **UI** component, the second one is **container** component.

There are several features for **UI** components:

- Responsible for UI rendering, not responsible for any bussiness logical.

- No state(there is no this.state)

- All the datas come from this.props

- do not use any API of Redux

Here is an example of UI component.

```javascript
const Title = value => <h1 className="title"> {value} <h1>
```

As there is no state for **Title** component, and its state depends on the param, so it's similar to a pure function.

### Container component

In contrast to **UI** component, the features for **container** component are:

- Responsible for manage data and bussiness logical not responsible for UI rendering.

- Has innner state

- Using Redux API

In summary, **UI** component is in charge of **UI redenring**, **container** component is in charger of **data handling and  bussiness logical**.

What if a component both has UI and bussiness logical? The solution is, split it into the following structure: the outside is a
**container** component, the inner is a **UI** component. The outside component is incharge of communicatio and passing data to **UI** component, which renders the view.