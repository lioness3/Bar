

const reducer = (state ={count:124}, action) => {
  switch (action.type) {
    case 'SELL_PINT':

      return{

        count: count -= 1

    }

    default:{

      return state;
    }

  }
}
export default reducer;
