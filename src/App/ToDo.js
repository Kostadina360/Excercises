import React from 'react'
import ToDosData from './ToDosData'
import ToDoItem from './ToDoItem'

class ToDo extends React.Component{
    constructor(){
        super()
        this.state={
            todo: ToDosData
        }
    }
        
    
    render(){ 
        const temporary=this.state.todo.map(item =>
        <ToDoItem key={item.id} item={item}/>)
        return(
            <div>
                {temporary}
            </div>
        )
    }
}

export default ToDo 