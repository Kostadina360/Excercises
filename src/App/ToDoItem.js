import React from 'react'


function ToDoItem(props){
    return(
        <div className='todo-item'>
              <p>Task:{props.item.text}</p>
              <input type='checkbox' checked={props.item.complete}/>
              <br/>
        </div>
      
    )
}
export default ToDoItem