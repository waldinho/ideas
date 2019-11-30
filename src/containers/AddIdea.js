import React from 'react'
import { connect } from 'react-redux'
import { addIdea } from '../actions'

const AddIdea = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addIdea(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Idea
        </button>
      </form>
    </div>
  )
}

export default connect()(AddIdea)
