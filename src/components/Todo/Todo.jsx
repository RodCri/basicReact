/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Todo.css'
import { useState } from 'react';

export const Todo = ({index,id,title,complete,onUpdate,onDelete}) => {

  const [isEdit, setIsEdit] = useState(false);

  function FormEdit (){
    const [newValue, setNewValue] = useState(title);

    const handleSubmit = (e) =>{

      onUpdate(id,newValue);
      setIsEdit(false)
    }

    const handleChange = (e) =>{
      setNewValue(e.target.value)
    }

    return (
      <td colSpan="5">
        <input className='mr-2 mx-2' type="text" name="" id="" onChange={handleChange} value={newValue} />
        <button className='mr-2 btn btn-warning' onClick={handleSubmit}>Update</button>
      </td>
    )
  }

  function TodoElement(){
    return(
      <>
        <td>{index}</td>
        <td>{title}</td>
        <td>
          <span className={`state  ${complete ? 'completed' : 'pending'}`}>
            {complete ? 'True' : 'False'}
          </span>
        </td>
        <td onClick={() => setIsEdit(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
          </svg>
        </td>
        <td onClick={(e) => onDelete(id)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
            <path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
          </svg>
        </td>
      </>
    )
  }

  return (
    <tr className="todo">
      { isEdit 
        ? (<FormEdit />)
        : (<TodoElement />)
      }
    </tr>
  )
}
