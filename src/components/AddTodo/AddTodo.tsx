import { ChangeEvent, FormEvent } from "react";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";

import Input from "../Input/Input";

export type AddTodoProps = {
    task: string
    handleSubmitTodo: (e: FormEvent) => void
    handleChange: (e: ChangeEvent) => void
}

export const AddTodo = ({
    task,
    handleSubmitTodo,
    handleChange
}: AddTodoProps) => {
    return (
        <form
            className="flex justify-between w-full"
            onSubmit={handleSubmitTodo}>
            <Input
                size="large"
                type="text"
                name="task"
                value={task}
                onChange={handleChange}
                ></Input>

            <button type="submit" aria-label="Add Todo">
                <PlusIcon></PlusIcon>
            </button>
        </form>
    )
}
