import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

const Actions = {
  buyCake: "BUY_CAKE",
  cookCake: "COOK_CAKE"
};

//create Action
function buyCake(text) {
  return {
    type: Actions.buyCake
  };
}
function cookCake(text) {
  return {
    type: Actions.cookCake
  };
}

const shopInfo = {
  numberOfCake: 10
};

//create reducer
function reducer(state = shopInfo, action) {
  switch (action.type) {
    case "BUY_CAKE":
      return (state = { ...state, numberOfCake: state.numberOfCake - 1 });
    case "COOK_CAKE":
      return (state = { ...state, numberOfCake: state.numberOfCake + 1 });
    default:
      return state;
  }
}

//create store
const store = createStore(reducer);
/* console.log(store.getState().numberOfCake);
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log(store.getState());*/
store.dispatch(cookCake());
console.log(store.getState());

const Root = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <App
      numberOfCake={store.getState().numberOfCake}
      dispBuyCake={() => {
        store.dispatch(buyCake());
      }}
    />,
    Root
  );
};

render();

store.subscribe(render);
