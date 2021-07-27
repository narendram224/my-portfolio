import React from 'react'
import styled from 'styled-components'



const ContactItems = ({icon,title,contact1,contact2}) => {
    return (
        <ContactItemStyle>
            <div className="left-content">
    <p>{icon}</p>
            </div>
            <div className="right-content">
    <h6>{title}</h6>
    <p>{contact1}</p>
    <p>{contact2}</p>

                </div>
        </ContactItemStyle>
    )
}
const ContactItemStyle = styled.div`
    padding:1.3rem 1.8rem;
    background-color:var( --background-dark-color);
`

export default ContactItems
