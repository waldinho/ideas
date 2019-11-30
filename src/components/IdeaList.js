import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Idea from './Idea'

const IdeaList = ({ ideas, toggleIdea }) => (
  <Wrapper>
      <ul>
      {ideas.map(idea =>
        <Idea
          key={idea.id}
          {...idea}
          onClick={() => toggleIdea(idea.id)}
        />
      )}
    </ul>
  </Wrapper>
)

IdeaList.propTypes = {
  ideas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleIdea: PropTypes.func.isRequired
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: .875rem auto;
    padding: 1% 9% 0 8%;
  } 
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .875rem auto;
    border-radius: .1875rem;
    box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.1);
    padding: 0 2rem;
    background: #233143;
    margin: 0 1rem;
  }
`

export default IdeaList
