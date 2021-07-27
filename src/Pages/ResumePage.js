import React from 'react'
import Skills from '../Components/Skills'
import styled from 'styled-components'
import Resume from '../Components/Resume'
import { MainLaout } from '../Styled/Layout'

const ResumePage = () => {
    return (
        <MainLaout>

        <ResumeStyled>
            <Skills />
            <Resume />
        </ResumeStyled>
        </MainLaout>

    )
}

const ResumeStyled = styled.section`
`

export default ResumePage
