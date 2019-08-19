import React from 'react'

class ButtonChange extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleClik = this.handleClik.bind(this)
    }

    handleClik=()=>{
       this.setState( prevState =>{
           return({
            count: prevState.count +1
           }
        )
       })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClik}>Count now!</button>
                <div>{this.state.count}</div>
            </div>
        )
    }
}
export default ButtonChange