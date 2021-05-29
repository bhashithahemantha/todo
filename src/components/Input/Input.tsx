import React from 'react'
import "./Input.css"

function Input (props: any) {
    const { size, ...rest } = props
    return (
        <input className={`input ${size} flex-1 rounded shadow p-2 text-grey-dark mr-2`} {...rest}></input>
    )
}

export default Input;
