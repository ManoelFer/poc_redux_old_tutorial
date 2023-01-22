import { AnyAction, createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
  },
};

export interface IConter {
  counter: {
    value: number;
  };
}

let win: any = window as any;

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        },
      };

    case "counter/incrementAmount":
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload,
        },
      };

    default:
      return state;
  }
}

/*
Para usar o redux dev tools adicionar os seguintes parâmetros
window.__REDUX_DEVTOOLS__EXTENSION__ && window.__REDUX_DEVTOOLS__EXTENSION__()
*/

export const store = createStore(
  reducer,
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
);
