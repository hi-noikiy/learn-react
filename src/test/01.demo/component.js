import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: 'read test tutorail'
        }, {
          text: 'write responsive web pages'
        }
      ]
    }
  }

  calcTodoItems () {
    return this.state.todos.map(todo => {
      (
        <li className="todo-item" key={todo.text}>
          <div>
            {todo.text}
          </div>
        </li>
      )
    })
  }

  render() {

    let todoItems = this.calcTodoItems()

    return (
      <div className="Todo">
        <h1 className="title">Todo</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}


export default Todo
