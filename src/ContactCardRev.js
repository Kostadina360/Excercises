import React from 'react'


function ContactCardRev(props) {
    return (
        <div>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>e-mail: {props.contact.email}</p>
        </div>
    )
}

export default ContactCardRev
