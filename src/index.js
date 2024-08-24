import {createStore} from "redux";


const initialState = {};
const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1
    }
    return state;
}


const store = createStore(reducer)


console.log(store.getState())
