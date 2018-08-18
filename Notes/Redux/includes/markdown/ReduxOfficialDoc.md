# Redux

**Redux attempts to make state mutations predicatable** by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the **three principles** of Redux.

## Core Concepts

state. Change state by dispatching an action.

To tie state and actions togther, we write a function called a reducer. Reducer takes state and actions as argument, and return the next state of the app.

A possible model for an app:

```javascript
{
  todos:[
    {
      text: 'Eat food',
      completed: true
    }, {
      text: 'Excersise',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

Possible actions for an App

```javascript
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

## Three Principles

### Single source of truth

### State is read-only

### Changes are made with pure functions

## Prior Art

### Flux

### Immutable

**Redux doesn't care how you store the state—it can be a plain object, an Immutable object, or anything else.**.

### Baobab

​Baobab is another popular library implementing immutable API for updating plain JavaScript objects.

## Learning Resources

## Basic concepts

### Actions

#### How an Action looks like(the boilerplate of an action)

**Actions** are playloads of information that send data from your application to your store. They are the only source of information for the store.
You sned them to the store usign ***store.dispatch()**.

An example action which represents adding a new todo item:

```javascript
const ADD_TODO = 'ADD_TODO'
let anAction = {
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

##### Action Creators

**Action creators** are exactly that-functions that create actions.

```javascript
function addTodo (text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

In **traditonal Flux**, action creators ofen trigger a dispatch when invoked. like so:

```javascript
function addToDoWithDispatch(text) {
  const action = {
    type: ADD_TODO,
    text
  }
  dispatch(action)
}
```

In Redux this is not the case. Instead, to actually initiate a dispatch, pass the result to the **dispatch()* function:

```javascript
dispatch(addTodo(text))
dispatch(completeTodo(text))
```

Alternatively, you can create a bound action creator that automatically dispatches:

```javascript
const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(completeTodo(index))
```

Now you'll be able to call them directlly:

```javascript
boundAddTodo(text)
boundCompleteTodo(index)
```

**redux-react**  **connect**

### Reducers

Reducers specify how the application's state changes in response to actions sent t o the store.

The reducer is a pure function that takes the previous state and an action, and returns the next state.

```javascript
(prevState, action) => newState
```
