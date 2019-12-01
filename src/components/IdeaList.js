import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Idea from './Idea'

const IdeaList = ({ ideas, toggleIdea }) => {
  const [sort, setSort] = useState(false);
  const sortChange = () => {
    setSort(!sort)
  }
  const dynamicSort = (property) => {
    var sortOrder = 1;
    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a,b) {
      if(sortOrder === -1){
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }        
    }
  }
  const sortABC = () => {
    return (
      <>
      {ideas.sort(dynamicSort("title")).map(idea =>
        <Idea
          key={idea.id}
          {...idea}
          onClick={() => toggleIdea(idea.id)}
        />
      )}
      </>
    )
  }
  const sortNum = () => {
    return (
      <>
      {ideas.sort(function(a, b){
        var aa = a.date.split('/').reverse().join(),
            bb = b.date.split('/').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
        }).map(idea =>
        <Idea
          key={idea.id}
          {...idea}
          onClick={() => toggleIdea(idea.id)}
        />
      )}
      </>
    )
  } 
  const sortText = sort ? 'Newest first' : 'Sort alphabetically'
  return (
    <>
    <p onClick={sortChange} className='sort'>{sortText}</p>
    <Wrapper>
      {sort ? sortABC() : sortNum()}
    </Wrapper>
    </>
  )
}

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
text-align: left;
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
        cursor: pointer;
      }
    }
  }
`

export default IdeaList
