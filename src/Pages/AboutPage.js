import React from 'react'
import styled from 'styled-components'
import { MainLaout } from '../Styled/Layout'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import Service from '../Components/Service'
import ReviewSection from '../Components/ReviewSection'

const AboutPage = () => {
    return (
       <MainLaout>
           <AboutStyle>
               <Title title="About me" span="About me" />
               <ImageSection />
               <Service />
               <ReviewSection />
           </AboutStyle>
       </MainLaout>
    )
}

const AboutStyle = styled.section`

`
export default AboutPage
