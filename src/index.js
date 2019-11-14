import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";
//import { combineReducers } from "redux";
const logger = createLogger();

const Actions = {
  register: "REGISTER_FLIGHT",
  delete: "DELETE_FLIGHT"
};

//create Action
function registerFlight(flight) {
  return {
    type: Actions.register,
    flightInfo: {
      ...flight
    }
  };
}
//Action Delete
function deleteFlight(flightID) {
  return {
    type: Actions.delete,
    flightID: flightID
  };
}

const initialFlight = { flight: [] };
//create reducer
function reducer(state = initialFlight, action) {
  switch (action.type) {
    case "REGISTER_FLIGHT":
      return (state = {
        flight: [
          ...state.flight,
          {
            fn: action.flightInfo.fn,
            des: action.flightInfo.des,
            dep: action.flightInfo.dep,
            date: action.flightInfo.date
          }
        ]
      });

    case "DELETE_FLIGHT":
      const result = state.flight.filter(f => {
        return f.fn !== action.flightID;
      });
      return (state = {
        flight: [...result]
      });
    default:
      return state;
  }
}

//reducer 2
/* function delete_reducer(state = store.getState(), action) {
  switch (action.type) {
    case "DELETE_FLIGHT":
      const result = state.flight.filter(f => {
        return f.fn !== action.flightID;
      });
      return (state = {
        flight: [...result]
      });

    default:
      return state;
  }
}
//combining reducers
const rootReducer = combineReducers({
  register: reducer,
  delete: delete_reducer
}); */

//create store
const store = createStore(reducer, applyMiddleware(logger));

//method for sending to component for dispatching action register_flight
const dispatchRegisterFlight = flit => {
  store.dispatch(registerFlight(flit));
  console.log(store.getState());
};

const dispatchDeleteFlight = fID => {
  store.dispatch(deleteFlight(fID));
};

const Root = document.getElementById("root");
const render = () => {
  var flights = store.getState().flight;
  ReactDOM.render(
    <App
      dispatchRegisterFlight={dispatchRegisterFlight}
      flights={flights}
      dflight={dispatchDeleteFlight}
    />,
    Root
  );
};

render();
//subscribe render method with store container
store.subscribe(render);
