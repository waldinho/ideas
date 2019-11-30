import ideas from './ideas'

const getCurrentDate = (separator='-')=> {

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

describe('ideas reducer', () => {
  it('should handle initial state', () => {
    expect(
      ideas(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_IDEA', () => {
    expect(
      ideas([], {
        type: 'ADD_IDEA',
        title: 'Run the tests title',
        text: 'Run the tests',
        date: getCurrentDate(),
        id: 0
      })
    ).toEqual([
      {
        title: 'Run the tests title',
        text: 'Run the tests',
        date: getCurrentDate(),
        completed: false,
        id: 0
      }
    ])

    expect(
      ideas([
        {
          title: 'Run the tests title',
          text: 'Run the tests',
          date: getCurrentDate(),
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_IDEA',
        title: 'Run the tests title',
        text: 'Use Redux',
        date: getCurrentDate(),
        id: 1
      })
    ).toEqual([
      {
        title: 'Run the tests title',
        text: 'Run the tests',
        date: getCurrentDate(),
        completed: false,
        id: 0
      }, {
        title: 'Run the tests title',
        text: 'Use Redux',
        date: getCurrentDate(),
        completed: false,
        id: 1
      }
    ])

    expect(
      ideas([
        {
          title: 'Run the tests title',
          text: 'Run the tests',
          date: getCurrentDate(),
          completed: false,
          id: 0
        }, {
          title: 'Run the tests title',
          text: 'Use Redux',
          date: getCurrentDate(),
          completed: false,
          id: 1
        }
      ], {
        type: 'ADD_IDEA',
        title: 'Run the tests title',
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        title: 'Run the tests title',
        text: 'Run the tests',
        date: getCurrentDate(),
        completed: false,
        id: 0
      }, {
        title: 'Run the tests title',
        text: 'Use Redux',
        date: getCurrentDate(),
        completed: false,
        id: 1
      }, {
        title: 'Run the tests title',
        text: 'Fix the tests',
        completed: false,
        date: getCurrentDate(),
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_IDEA', () => {
    expect(
      ideas([
        {
          title: 'Run the tests title',
          text: 'Run the tests',
          date: getCurrentDate(),
          completed: false,
          id: 1
        }, {
          title: 'Run the tests title',
          text: 'Use Redux',
          date: getCurrentDate(),
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_IDEA',
        id: 1
      })
    ).toEqual([
      {
        title: 'Run the tests title',
        text: 'Run the tests',
        date: getCurrentDate(),
        completed: true,
        id: 1
      }, {
        title: 'Run the tests title',
        text: 'Use Redux',
        date: getCurrentDate(),
        completed: false,
        id: 0
      }
    ])
  })

})
