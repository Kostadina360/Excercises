import React from 'react'

class HeaderWelcome extends React.Component{
    render(){
        return(
                <header>
                     <p>Welcome, {this.props.username}</p>
                </header>
        )
    }
}
export default HeaderWelcome