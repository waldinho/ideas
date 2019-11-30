import { connect } from 'react-redux'
import { toggleIdea } from '../actions'
import IdeaList from '../components/IdeaList'
import { VisibilityFilters } from '../actions'

const getVisibleIdeas = (ideas, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return ideas.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return ideas.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  ideas: getVisibleIdeas(state.ideas, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleIdea: id => dispatch(toggleIdea(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaList)
