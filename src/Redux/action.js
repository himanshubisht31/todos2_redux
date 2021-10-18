
import { ADD_TODO, DELETE_TODO, GET_TODO, TOGGLE_TODO } from "./actionTypes"


export const addToDo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const getToDo = (data) => {
    return {
        type: GET_TODO,
        payload: data
    }
}


export const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}