import {createStore} from 'redux';



const initialState = {
  books:[],
  authors:[]
}
const rootReducer = (state = initialState, action)=>{
  return state;
}
const store = createStore(rootReducer);

export default store;