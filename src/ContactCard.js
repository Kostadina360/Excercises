import React from 'react'


function ContactCard (props) {
    return(
        <div>
            
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>e-mail: {props.email}</p>
        </div>
    )
}
export default ContactCard