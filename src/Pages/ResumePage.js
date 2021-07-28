import React from 'react'
import Skills from '../Components/Skills'
import styled from 'styled-components'
import Resume from '../Components/Resume'
import { MainLayout } from '../Styled/Layout'

const ResumePage = () => {
    return (
        <MainLayout>
            <ResumeStyled>
                <Skills />
                <Resume />
            </ResumeStyled>
        </MainLayout>
    )
}

const ResumeStyled = styled.section``

export default ResumePage
