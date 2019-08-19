import React from 'react'
import ToDosData from './ToDosData'

class ItemNew extends React.Component{
    constructor(){
        super()
        this.state={
            toDo: {ToDosData}
        }
    
    }
HandleChange=()=>{
    this.setState={
        this.state.toDo.complete: false
    }
}

    render(){
        return(
            <div className='todo-item'>
              <p>Task:  {this.state.toDo.text}</p>
              <input type='checkbox' onChange={this.HandleChange}/>
              <br/>
        </div>
        )
    }
}


export default ItemNew