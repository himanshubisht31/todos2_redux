import { Switch, Route } from "react-router";

import React from "react";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import Item from "../Components/Item";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <TodoInput />
          <TodoList />
        </Route>

        <Route path="/todo/:id">
          <Item />
        </Route>
      </Switch>
    </div>
  );
}
