const redux = require('redux');

const counterFunction = (state = { counter: 0 }, action) => {
   if(action.type === 'increment') {
      return {
         counter: state.counter + 1
      };
   };

   if(action.type === 'decrement') {
      return {
         counter: state.counter - 1
      };
   };

   return state;
};

const store = redux.createStore(counterFunction);
// console.log(store.getState());      // To Get Initial Data Store State

const counterSubscriber = () => {
   const latestState = store.getState();
   console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });