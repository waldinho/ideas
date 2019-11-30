import React from 'react'
import PropTypes from 'prop-types'

const Idea = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      opacity: completed ? '0.5' : '1'
    }}
  >
    {text}
  </li>
)

Idea.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Idea
