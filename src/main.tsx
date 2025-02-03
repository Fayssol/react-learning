import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@cloudscape-design/global-styles/index.css"
import { Istore } from './reducers/store.ts'
import { Provider } from 'react-redux'
import { myStore } from './components/redux/myStore.ts'
//ACTIONS
// const increment = () => {
//   return {
//     type : 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type : 'DECREMENT'
//   }
// }

//REDUCER
// const counter = (state : number = 0, action:any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// }

//STORE

// const store = configureStore({
//   reducer: allReducers,
// });

// store.subscribe(() => console.log(store.getState()));

//DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </StrictMode>,
)
