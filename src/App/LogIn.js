import React from 'react'

class LogIn extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn: true
        }
    }
    check=()=>{
        if (this.state.isLoggedIn===true){
            return ("on")
        }
        else {
            return("out")
        }
    }
    render(){
       
        return(
            <div>
                <p> You are currently log {this.check()}</p>
                <br/>
            </div>
        )
    }
}
export default LogIn