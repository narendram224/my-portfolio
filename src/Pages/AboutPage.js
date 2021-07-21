import React from 'react'
import styled from 'styled-components'
import { MainLaout } from '../Styled/Layout'
import Title from '../Components/Title'

const AboutPage = () => {
    return (
       <MainLaout>
           <AboutStyle>
               <Title title="About me" span="About me" />
           </AboutStyle>
       </MainLaout>
    )
}

const AboutStyle = styled.section`

`
export default AboutPage
