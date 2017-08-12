import React from 'react'


let AddTodoForm = ({ onSubmit }) => {
  let input

  return (
    <div>
      <h3> Add todo form </h3>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm;
