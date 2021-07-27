import React from 'react'
import { MainLaout, InnerLaout } from '../Styled/Layout'
import Title from './Title'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
const allSkills = [{
    title: 'React',
    width:"70%" ,
    text:"70%"
},{
    title: 'Redux',
    width:"60%" ,
    text:"60%"
},{
    title: 'Axios',
    width:"70%" ,
    text:"70%"
},{
    title: 'styled-components',
    width:"60%" ,
    text:"60%"
},{
    title: 'MERN Stack',
    width:"60%" ,
    text:"60%"
},{
    title: 'JavaScript',
    width:"70%" ,
    text:"70%"
},{
    title: 'Nodejs',
    width:"75%" ,
    text:"75%"
},{
    title: 'Rest api using Express',
    width:"70%" ,
    text:"70%"
},{
    title: 'Ionic',
    width:"60%" ,
    text:"60%"
},{
    title: 'Angular',
    width:"55%" ,
    text:"55%"
},{
    title: 'Docker',
    width:"50%" ,
    text:"50%"
},{
    title: 'React-Native',
    width:"40%" ,
    text:"40%"
},{
    title: 'React',
    width:"60%" ,
    text:"60%"
},{
    title: 'TypeScript',
    width:"65%" ,
    text:"65%"
},{
    title: 'AWS',
    width:"55%" ,
    text:"55%"
},{
    title: 'mongodb',
    width:"52%" ,
    text:"52%"
}]
const Skills = () => {
    
    return (
        <SkillsStyle>

                <Title title="Resume" span="Resume" />
            <InnerLaout>
                <div className="skills">

               
                {
                    allSkills.map(skill=>{
                        return (
                            <ProgressBar title={skill.title} text={skill.text} width={skill.width}  />

                        )
                    })
                }
                 </div>
            </InnerLaout>
        </SkillsStyle>

    )
}

const SkillsStyle = styled.div`
        .skills{
            display:grid;
            grid-template-columns:repeat(2,1fr);

            grid-row-gap:1.5rem;
            grid-column-gap:2.5rem;
        }
`

export default Skills
