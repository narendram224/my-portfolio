import React from 'react'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from './Title'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
const allSkills = [
    {
        title: 'Next js',
        width: '68%',
        text: '68%',
    },
    {
        title: 'Landing Page optimization',
        width: '50%',
        text: '50%',
    },
    {
        title: 'Build optimisation',
        width: '60%',
        text: '60%',
    },
    {
        title: 'Page performance',
        width: '70%',
        text: '70%',
    },
    {
        title: 'Search engines optimization [SEO]',
        width: '50%',
        text: '50%',
    },
    {
        title: 'Code quality with sonar qube',
        width: '50%',
        text: '50%',
    },
    {
        title: 'Atomic Designing',
        width: '80%',
        text: '80%',
    },
    {
        title: 'TypeScript',
        width: '65%',
        text: '65%',
    },
    {
        title: 'Redux',
        width: '70%',
        text: '70%',
    },
    {
        title: 'React query',
        width: '70%',
        text: '70%',
    },
    {
        title: 'zustand',
        width: '60%',
        text: '60%',
    },
    {
        title: 'React',
        width: '70%',
        text: '70%',
    },

    {
        title: 'styled-components',
        width: '60%',
        text: '60%',
    },
    {
        title: 'MERN Stack',
        width: '60%',
        text: '60%',
    },
    {
        title: 'Ionic',
        width: '60%',
        text: '60%',
    },
    {
        title: 'Angular',
        width: '55%',
        text: '55%',
    },
    {
        title: 'Docker,Jenkins',
        width: '50%',
        text: '50%',
    },
    {
        title: 'Nest js',
        width: '50%',
        text: '50%',
    },
    {
        title: 'React-Native',
        width: '40%',
        text: '40%',
    },

    {
        title: 'AWS',
        width: '55%',
        text: '55%',
    },
    {
        title: 'Mongodb',
        width: '52%',
        text: '52%',
    },
]
const Skills = () => {
    return (
        <SkillsStyle>
            <Title title="Resume" span="Resume" />
            <InnerLayout>
                <div className="skills">
                    {allSkills.map((skill, i) => {
                        return (
                            <ProgressBar
                                key={skill.title}
                                title={skill.title}
                                text={skill.text}
                                width={skill.width}
                            />
                        )
                    })}
                </div>
            </InnerLayout>
        </SkillsStyle>
    )
}

const SkillsStyle = styled.div`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1.5rem;
        grid-column-gap: 2.5rem;
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default Skills
