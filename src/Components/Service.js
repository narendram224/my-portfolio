import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styled/Layout'
import Title from './Title'
import web from '../Assets/imgs/seo.png'
import api from '../Assets/imgs/api.png'
import mern from '../Assets/imgs/mern.png'

import ServiceCard from './ServiceCard'
const serviceArry = [
    {
        image: web,
        title: 'My first title',
        paragraph: 'this si my first param grapth',
    },
    {
        image: api,
        title: 'My first title2',
        paragraph: 'this si my first param grapth',
    },
    {
        image: mern,
        title: 'My first title3',
        paragraph: 'this si my first param grapth',
    },
]

const Service = () => {
    return (
        <InnerLayout>
            <ServiceStyle>
                <Title title="Services" span="Services" />
                <div className="services">
                    {serviceArry.map((val) => (
                        <ServiceCard key={val.title} {...val} />
                    ))}
                </div>
            </ServiceStyle>
        </InnerLayout>
    )
}
const ServiceStyle = styled.section`
    .services {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 955px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default Service
