import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router'
import { toggleToDo } from '../Redux/action';


export default function Item() {

    const {id}=useParams()
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleToggle = () => {
    
        dispatch(toggleToDo(+id));


}


    return (
      <div>
        {todos.map((e) =>
          e.id === +id ? (
            <div key={e.id}>
              <p>{e.title}</p>


              <button onClick={handleToggle}>
                {e.status ? "completed " : "pending"}
              </button>
            </div>
          ) : null
        )}
      </div>
    );
}
