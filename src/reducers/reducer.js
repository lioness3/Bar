const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SELL_PINT':
    return[
      ...state,
      {
        count: count -1
      }
    ]
    default:
     return state

  }
}
