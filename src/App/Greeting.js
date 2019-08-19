import React from 'react'

class Greeting extends React.Component{
       render(){
        let date = new Date()
        const hours = date.getHours()
        let timeOfDay
    
        if (hours<12){
            timeOfDay="morning" 
        }
        if (hours>=12&& hours <=17){
            timeOfDay="afternoon"
        }
        else {timeOfDay="night"}

        return(
            <h1>'Good {timeOfDay} Kostadina!'</h1>
        )
    }
}

export default Greeting