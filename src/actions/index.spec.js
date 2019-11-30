import * as actions from './index'

describe('idea actions', () => {
  it('addIdea should create ADD_IDEA action', () => {
    expect(actions.addIdea('Use Redux')).toEqual({
      type: 'ADD_IDEA',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleIdea should create TOGGLE_IDEA action', () => {
    expect(actions.toggleIdea(1)).toEqual({
      type: 'TOGGLE_IDEA',
      id: 1
    })
  })
})
