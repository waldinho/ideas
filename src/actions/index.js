let nextIdeaId = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')).ideas.length : 0
export const addIdea = (title, text) => ({
  type: 'ADD_IDEA',
  id: nextIdeaId++,
  title,
  text,
})

export const editIdea = (id, title, text) => ({
  type: 'EDIT_IDEA',
  id,
  title,
  text,
})


export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleIdea = id => ({
  type: 'TOGGLE_IDEA',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}