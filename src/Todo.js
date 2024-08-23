import React, { useEffect, useState } from "react";
import { Input, Button } from "./utils";
import axios from "axios";
import TodoListing from "./TodoListing";
import { deleteTodoDataApi, markDoneTodoDataApi, postTodoDataApi, getTodoDataApi } from "./services";
import { toast } from 'react-toastify';

// parent component
const intialState = {
  name: null,
  status: "Pending",
};
const Todo = () => {
  const url = "http://localhost:4200/todo";
  const [formData, setFormData] = useState(intialState);
  const [todoData, setTodoData] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, name: value }));
  };
  const handleSubmit = () => {
    try {
      postTodoDataApi(formData).then((res) => {
          console.log(res);
          getTodoData();
          toast.success("Added Suceessfuly")
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const getTodoData = () => {
    getTodoDataApi().then((res) => {
        setTodoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteTodo = (e) => {
    try {
      const { id } = e;
      console.log(e);
      deleteTodoDataApi(id)
        .then((res) => {
          console.log(res);
          getTodoData();
          toast.success("Deleted Suceessfuly")

        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleMarkTodoDone = (e) => {
    try{
      const {id} = e
      markDoneTodoDataApi(id , {status: "Completed"}).then((res) => {
        console.log(res);
        getTodoData();
        toast.success("Check Successfuly")
  
      })
      .catch((err) => {
        console.log(err);
      });
    }catch(err){
      console.log(err);
    }

  }
  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <>
      {/* Adding todo data */}
      <div className="d-flex mt-5">
        <Input type="text"   placeholder="Enter todo"
          onChange={handleChange}
          className="form-control w-25"
        />
        <Button
          text="Add Todo"
          onClick={handleSubmit}
          className="btn btn-md btn-primary"
        />
      </div>
      {/* listing todo data */}
      <TodoListing data={todoData} handleMarkTodoDone = {handleMarkTodoDone} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
};

export default Todo;
