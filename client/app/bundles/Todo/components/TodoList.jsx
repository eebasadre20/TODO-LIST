import React, { PropTypes } from 'react'
// import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo =>
      <li key={todo.id} >{ todo.text }</li>
    )}
  </ul>
)

export default TodoList;
