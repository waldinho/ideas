import React from 'react'
import styled from 'styled-components';
import Header from './Header'
import Buttons from './Buttons'
import AddIdea from '../containers/AddIdea'
import VisibleIdeaList from '../containers/VisibleIdeaList'

const App = () => (
    <>
    <Header />
    <Wrapper>
      <AddIdea />
      <Buttons />
    </Wrapper>
    <VisibleIdeaList />
    </>
)

const Wrapper = styled.div`
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
`

export default App

