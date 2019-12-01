import React, {useState} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editIdea } from '../actions'

const Idea = ({ dispatch, onClick, completed, title, text, date, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleTitleChange = event => {
    title = event.target.value
    dispatch(editIdea(title, text, date, id))
  }
  const handleTextChange = event => {
    text = event.target.value
    dispatch(editIdea(title, text, date, id))
  }
  const editMode = () => {
    setIsEdit(!isEdit)
  }
  const ideaToggleText = completed ? 'Add' : 'Remove'
  return (
    <div className='idea' 
      style={{
      opacity: completed ? '0.5' : '1'}}
      >
      {isEdit ? 
        <>
        <input type="text" value={title} onChange={handleTitleChange} placeholder={title} className='focus' />
        <input type="text" value={text} onChange={handleTextChange} placeholder={text}/>
        <div className='options'>
          <small onClick={editMode}>Save</small>
        </div>
        </>
        :
        <>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{date}</p>
        <div className='options'>
          <small onClick={editMode}>Edit</small>
          <small onClick={onClick}>{ideaToggleText}</small>
        </div>
        </>
      }
    </div>
  )
}

Idea.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default connect()(Idea)
