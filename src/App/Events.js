import React from 'react'

class Events extends React.Component{
    constructor(){
        super()
        this.state={
              show: 'on'
            }
    }
Mause=()=>{
    (<div>I was on!</div>)
    }
      
OnClikE=()=>{
    console.log("I was clicked")
}

render() {
    return(
        <div>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            onMouseOver={this.Mause}/>
            <br/>
            <button onClick={this.OnClikE}>Clik me</button>
        </div>
    )
}
}

export default Events