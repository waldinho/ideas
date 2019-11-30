import React from 'react'
import { connect } from 'react-redux'
import { addIdea } from '../actions'
import styled from 'styled-components';

const AddIdea = ({ dispatch }) => {
  let input

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-top: 25vh;
padding: 0 0 10% 0;
display: flex;
flex-direction: row;
justify-content: center;
  button {
    width:38%;
    border: 1px solid #fff;
    margin: 0 0 0 2%;
  }
}
`

export default connect()(AddIdea)
