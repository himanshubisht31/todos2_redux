import React from 'react'
import { useSelector } from 'react-redux'

import {Link} from 'react-router-dom'

export default function TodoList() {

    const todos=useSelector(state=>state.todos)


    return (
      <div>
        {todos.map((e) => (
          <div>
            <Link to={`/todo/${e.id}`}>
            <p>{e.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
}
