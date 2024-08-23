import Todo from "./Todo";
import { Button, Input } from "./utils";
import React from "react";

const TodoListing = (props) => {
    const {data , handleDeleteTodo , handleMarkTodoDone} = props
  return (
    <div>
      <table className=" mt-5 mx-3 table table-hover table-dark">
        <thead>
          <tr className="text-center">
            <th scope="col">Id</th>
            <th scope="col">Mark as Done</th>
            <th scope="col">Todo</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
          data && data.map((todo) => {
            return (
              <tr className="text-center">
                <th scope="row">{todo.id}</th>
                <th><Input checked={todo.status === "Completed" ? true : false} disabled={todo.status === "Completed" ? true : false} onChange = {() => handleMarkTodoDone(todo)} type = "checkbox" className="form-check-input"/></th>
                <td>{todo.name}</td>
                <td className = {todo.status === "Pending" ? "text-warning" : "text-success"}>{todo.status}</td>
                <td><Button onClick={(e) => handleDeleteTodo(todo)} className="btn btn-md btn-danger" text="Delete"/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListing;
