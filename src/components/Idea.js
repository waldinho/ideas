import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Idea = ({ onClick, completed, title, text, date }) => {
  const [ideaTitle, setIdeaTitle] = useState(title);
  const [ideaText, setIdeaText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);
  const handleTitleChange = event => {
    const {value} = event.target
    setIdeaTitle(value)
  }
  const handleTextChange = event => {
    const {value} = event.target
    setIdeaText(value)
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
        <input type="text" value={ideaTitle} onChange={handleTitleChange} placeholder={ideaTitle} className='focus' />
        <input type="text" value={ideaText} onChange={handleTextChange} placeholder={ideaText}/>
        <div className='options'>
          <small onClick={editMode}>Save</small>
        </div>
        </>
        :
        <>
        <h3>{ideaTitle}</h3>
        <p>{ideaText}</p>
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

export default Idea
