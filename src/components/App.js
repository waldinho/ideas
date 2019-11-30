import React from 'react'
import Footer from './Footer'
import AddIdea from '../containers/AddIdea'
import VisibleIdeaList from '../containers/VisibleIdeaList'

const App = () => (
  <div>
    <AddIdea />
    <VisibleIdeaList />
    <Footer />
  </div>
)

export default App
