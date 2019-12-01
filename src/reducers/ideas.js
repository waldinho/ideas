const ideas = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          date: action.date,
          completed: false
        }
      ]
    case 'EDIT_IDEA':
      console.log(state)
      return state.map(idea =>
        (idea.id === action.id)
            ? {...idea, 
                id: action.id,
                title: action.title,
                text: action.text,
                date: action.date,
                completed: false
              }
            : idea
        )
    case 'TOGGLE_IDEA':
      return state.map(idea =>
        (idea.id === action.id)
          ? {...idea, completed: !idea.completed}
          : idea
      )
    default:
      return state
  }
}

export default ideas 
