import React from 'react'
import ToDosData from './ToDosData'

class ToDoItemNew extends React.Component{
    constructor(){
        super()
        this.state={
            id:"1",
            text: "Take out the trash",
            complete: true
        }
    }
    HandleChange=()=>{
        this.setState=(
           this.state.complete: false
       )
    }
    
    render(){
        return(
            <div className='todo-item'>
              <p>Task:  {this.state.text}</p>
              <input type='checkbox' onChange={this.HandleChange}/>
              <br/>
        </div>
        )
    }



}
export default ToDoItemNew