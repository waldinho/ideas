import React from 'react'
import styled from 'styled-components';
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Buttons = () => (
  <Wrapper>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Good Ideas
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      What was I thinking?
    </FilterLink>
  </Wrapper>
)

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  button {
    margin: 1% 4%;
    width: 91%;
  }
`

export default Buttons
