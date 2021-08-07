const redux = require('redux');

const counterFunction = (state = { counter: 0 }, action) => {
   return {
      counter: state.counter + 1
   };
};

const store = redux.createStore(counterFunction);
// console.log(store.getState());      // To Get Initial Data Store State

const counterSubscriber = () => {
   const latestState = store.getState();
   console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });