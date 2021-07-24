import React from 'react'
import styled from 'styled-components'

const ServiceCard = ({image,title,paragraph}) => {
    return (
        <ServiceCardStyle>
            <div className="container">
                <img src={image} alt ="" width="30%" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyle>
    )
}

const ServiceCardStyle = styled.div`
    background-color:var(--background-dark-gray);
    border: 1px solid var(--border-color);
    border-top-width:8px;
    transition:all 0.4s ease-in-out;
    
    &:hover {
        border-top-color: var(--primary-color);
        transform:translateY(4px)
    }
    &:nth-child(2) {
  margin: 0 1rem;

}
    .container{
        padding:1rem;
        h4{
            color:var(--white-color);
            font-size:1.5rem;
            padding: 1rem 0;
        position: relative;

            /* padding-bottom:1rem; */

            &::after{
                content:"";
                width:4rem;
                background-color:var(--border-color);
                height:3px;
                position:absolute;
                left:0;
                bottom:0;
                border-radius:10px;
            }
        }
        p{
            padding:0.8rem 0;
        }
    }

`
export default ServiceCard