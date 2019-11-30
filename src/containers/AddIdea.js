import React from 'react'
import { connect } from 'react-redux'
import { addIdea } from '../actions'
import styled from 'styled-components';

const AddIdea = ({ dispatch }) => {
  let title
  let text
  return (
    <Wrapper>
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim()) {
            return
          }
          if (!text.value.trim()) {
            return
          }
          dispatch(addIdea(title.value, text.value))
          title.value = ''
          text.value = ''
        }}>
          <input ref={node => title = node} placeholder='Add title...'/>
          <input ref={node => text = node} placeholder='Add text...' />
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
