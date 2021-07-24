import React from 'react'
import styled from 'styled-components'
import { InnerLaout } from '../Styled/Layout'
import Title from './Title'
import web from '../Assets/imgs/seo.png'
import api from '../Assets/imgs/api.png'
import mern from '../Assets/imgs/mern.png'


import ServiceCard from './ServiceCard'
const serviceArry = [{image:web,title:"My first title",paragraph:"this si my first param grapth"},
{image:api,title:"My first title",paragraph:"this si my first param grapth"},
{image:mern,title:"My first title",paragraph:"this si my first param grapth"}];

const Service = () => {
    return (
        <InnerLaout>

       <ServiceStyle>
            <Title title="Services" span="Services" /> 
            <div className="services">

            {
                serviceArry.map(val=> <ServiceCard key={val.title} {...val} />)
            }
            </div>

       </ServiceStyle>
       </InnerLaout>

    )
}
const ServiceStyle =styled.section`
    .services{
        margin-top:5rem;
        display:flex;
        justify-content:space-between;
    }
`

export default Service
