import React from 'react'

type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo
    handleDeleteTodo: (id: string) => void
    handleCheckTodo: (id: string) => void
}

export const Row = ({
    todo: { task, isCompleted, id },
    handleDeleteTodo,
    handleCheckTodo }: TodoProps
) => {
    return (
        <div className={`
        flex w-full p-4 mb-2 justify-between items-center 
        ${isCompleted ? "bg-gray-400 " : "bg-purple-300"}
        `}>
            <p className={`
            ml-2 text-xl font-sans font-medium
            ${isCompleted ? "text-white line-through" : "text-gray-700"}
        `}>{task} {id}</p>
            <div className="w-1/6 flex justify-between items-center mr-2">
                <button
                    aria-label="Delete a ToDo"
                    onClick={() => handleDeleteTodo(id)}
                    className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
                >
                    X
                </button>
                <input
                    className="form-checkbox h-7 w-7"
                    type="checkbox"
                    checked={isCompleted}
                    onClick={() => handleCheckTodo(id)}
                ></input>
            </div>
        </div>
    )
}
