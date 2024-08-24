import {createStore, combineReducers} from "redux";



const counterReducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1
    }
    return state;
}

const todoReducer = (state = [], action) => {
    if (action.type === 'ADD_TODO') {
        return [...state, 'Lern redux']
    }
    return state

}

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
})

const store = createStore(reducer)


console.log(store.getState())


store.dispatch({ type: 'INCREMENT'})

console.log(store.getState())
