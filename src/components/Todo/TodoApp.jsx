import { useState } from 'react';
import { data } from './data';
import { Todo } from './Todo';

export const TodoApp = () => {

  const [todoItem, setTodoItem] = useState({
    id: crypto.randomUUID(),
    title: '',
    complete: false
  });

  const [todos, setTodos] = useState(data);

  const  handleItem = (e) => {
    setTodoItem({
      id: crypto.randomUUID(),
      title: e.target.value,
      complete: false
    });
  }

  const handleAdd = (e) => {
    e.preventDefault()
    setTodos([...todos, todoItem])
    setTodoItem({
      id: 0,
      title: '',
      complete: false
    })
  }

  const handleUpdate = (id,value) =>{
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title = value;
    setTodos(temp)
  }

  const handleDelete = (id) =>{
    const temp = todos.filter((item => item.id !== id));
    setTodos(temp);
  }
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-9">
            <form className='form-control p-3' onSubmit={handleAdd}>
              <label htmlFor="item" className="form-label text-danger text-center text-uppercase">Todo Item</label>
              <input className='form-control my-3' name='item' type="text" placeholder='Enter todo....' onChange={handleItem} value={todoItem.title}/>
              <input className='btn btn-primary btn-block' type='submit' value="Add Todo" onClick={handleAdd} />
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-9">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">State</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                  {
                    todos.map((todoItem,index) => 
                    (<Todo 
                      key={todoItem.id} 
                      index={index} 
                      title={todoItem.title} 
                      complete={todoItem.complete}
                      id={todoItem.id} 
                      onUpdate={handleUpdate}
                      onDelete={handleDelete}
                    />))
                  } 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
