import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"

import { Row } from "../Row/Row";
import { data } from "../../todos";
import { AddTodo } from "../AddTodo/AddTodo";

import TodoService from "../../services/TodoService";

type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

export const Todos = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState("");

    const [todosLength, setTodosLength] = useState(0);
    const [hasTodos, setHasTodos] = useState(todos.length > 0);
    const [remainingTodos, setRemainingTodos] = useState(0);

    useEffect(() => {
        getTodoAsync();
        setTodosLength(todos.length);
        setHasTodos(todos.length > 0);
        setRemainingTodos(todos.filter((todo) => !todo.isCompleted).length);
        console.log('hast', hasTodos);
    }, [])

    const getTodoAsync = async () => {
        const result = await TodoService.getAllTodoAsync();
        setTodos(result?.data.data);
    }

    const deleteTodoAsync = async (id: string, updatedTodos: any) => {
        const result = await TodoService.deleteTodoAsync(id)
        if (result?.success) {
            setTodos(updatedTodos);
        }
    }

    const updateTodoAsync = async (todo: Todo) => {
        const updated = await TodoService.editTodoAsync(todo.id, todo);
        if (updated?.success) {
            console.log("updated");
        }

    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setTask(value);
    }

    const handleAddTodo = (todo: Todo) => {
        const updatedtTodos = [...todos, todo];
        setTodos(updatedtTodos);
        setTask("");
    }

    const handleSubmitTodo = async (e: FormEvent) => {
        e.preventDefault();

        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false
        }

        const result = await TodoService.saveTodoAsync(todo)
        if (result?.success) {
            console.log("success");
        } else {
            console.log("error", result?.error);
        }

        task && handleAddTodo(todo);
    }

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        deleteTodoAsync(id, updatedTodos);
    }

    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo;
        })
        const todoToUpdate = updatedTodos.filter(todo => todo.id === id)[0];
        updateTodoAsync(todoToUpdate);
        setTodos(updatedTodos);
    }

    return (
        <section
            className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center"
        >
            <AddTodo
                task={task}
                handleSubmitTodo={handleSubmitTodo}
                handleChange={handleChange}
            />
            <div className="h-10" />
            {todos.map(todo => (
                <Row
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCheckTodo={handleCheckTodo}
                ></Row>
            ))}

            {!hasTodos && (
                <p className="mb-5 text-xl text-red-500 uppercase">
                    Please add a todo!
                </p>
            )}
            {hasTodos && (
                <p>
                    [{remainingTodos} of {todosLength}] todos remaining
                </p>
            )}
        </section>
    )
}


