import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Idea from './Idea'

const IdeaList = ({ ideas, toggleIdea }) => (
  <Wrapper>
      {ideas.map(idea =>
        <Idea
          key={idea.id}
          {...idea}
          onClick={() => toggleIdea(idea.id)}
        />
      )}
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
justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;
flex: 1 1 auto,
margin: .875rem auto;
padding: 1% 9% 0 8%;
  .idea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .875rem auto;
    border-radius: .1875rem;
    box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.1);
    padding: 0 2rem;
    background: #233143;
    margin: 1rem;
    h3, p {
      margin-bottom: 0;
    }
    input {
      width: 100%;
      color: #fff;
      border: none;
      background: #233143;
      font-size: 18px;
    }
    input.focus {
      border-bottom: 1px solid #0f81a3;
    }
    .options {
      display: flex;
      flex-direction: row;
      small {
        margin: 1rem 1rem 1rem 0;
        color: #0f81a3;
      }
    }
  }
`

export default IdeaList
