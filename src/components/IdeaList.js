import React from 'react'
import PropTypes from 'prop-types'
import Idea from './Idea'

const IdeaList = ({ ideas, toggleIdea }) => (
  <ul>
    {ideas.map(idea =>
      <Idea
        key={idea.id}
        {...idea}
        onClick={() => toggleIdea(idea.id)}
      />
    )}
  </ul>
)

IdeaList.propTypes = {
  ideas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleIdea: PropTypes.func.isRequired
}

export default IdeaList
