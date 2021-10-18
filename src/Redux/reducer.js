
import { ADD_TODO, GET_TODO, TOGGLE_TODO} from './actionTypes';

const initState = {
    todos: []
}


export default function reducer(state = initState, { type, payload }) {

    switch (type) {
        case ADD_TODO:

            return {
             ...state,
                todos:  [...state.todos]
            }
        
        case GET_TODO:

            return {
             ...state,
                todos:  payload
            }
        
        case TOGGLE_TODO:

            return {
             ...state,
                todos:[...state.todos.map((e) => e.id === payload ? { ...e, status : !e.status}:e)]
            }


        default:
            return { ...state }
    }


}
