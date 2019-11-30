const getCurrentDate = (separator='-')=> {

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

const ideas = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          date: getCurrentDate(),
          completed: false
        }
      ]
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
