import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {addToDo, getToDo} from '../Redux/action'

import axios from 'axios'

export default function TodoInput() {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    
    const handleAddTask = async() => {

        try {
            const res = await axios.post("http://localhost:3001/todos", {
            status: false,
            title
        });

        // dispatch(addToDo(res.data));
        
            getToDos()
        
        }
        
        catch (error) {
            console.log(error.message);
        }
    }

    const getToDos = async() => {
        const res = await axios.get("http://localhost:3001/todos");

        dispatch(getToDo(res.data))
    }

    useEffect(() => {
        getToDos()
    }, [])


    return (
        <div>

            <input type="text" onChange={(e)=>setTitle(e.target.value)}  />

            <button onClick={handleAddTask} >Add Task</button>

            
        </div>
    )
}
