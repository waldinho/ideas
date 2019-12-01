import React from 'react'
import { connect } from 'react-redux'
import { addIdea } from '../actions'
import styled from 'styled-components';

const getCurrentDate = (separator='-')=> {

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

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
          dispatch(addIdea(title.value, text.value, getCurrentDate()))
          title.value = ''
          text.value = ''
        }}>
          <input autoFocus ref={node => title = node} placeholder='Add title...' required/>
          <input ref={node => text = node} placeholder='Add description...' required maxLength="500"/>
          <button type="submit">
            Add Idea
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 22vh 0 -3vh 0;
padding: 0 0 10% 0;
display: flex;
flex-direction: column;
justify-content: center;
  button {
    margin: 1% 4%;
    width: 91%;
    border: 1px solid #fff;
  }
}
`

export default connect()(AddIdea)
