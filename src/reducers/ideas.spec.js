import ideas from './ideas'

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
        id: 0
      })
    ).toEqual([
      {
        title: 'Run the tests title',
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      ideas([
        {
          title: 'Run the tests title',
          text: 'Run the tests',

          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_IDEA',
        title: 'Run the tests title',
        text: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        title: 'Run the tests title',
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        title: 'Run the tests title',
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    expect(
      ideas([
        {
          title: 'Run the tests title',
          text: 'Run the tests',

          completed: false,
          id: 0
        }, {
          title: 'Run the tests title',
          text: 'Use Redux',

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
        completed: false,
        id: 0
      }, {
        title: 'Run the tests title',
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        title: 'Run the tests title',
        text: 'Fix the tests',
        completed: false,
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

          completed: false,
          id: 1
        }, {
          title: 'Run the tests title',
          text: 'Use Redux',

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
        completed: true,
        id: 1
      }, {
        title: 'Run the tests title',
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

})
