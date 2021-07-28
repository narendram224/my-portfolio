import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'
const resumeContents = [
    {
        year: 'Jan 2020-March 2021',
        title: 'Web Developer',
        subTitle: 'Web tools and technologies',
        text: [
            'Building fully-functional CMS for managing chatbot events along with chatbot UI and placement on the screen of chatbot via CMS.',
            ' React ,Redux with Immer js, React hooks,Material UI ,JWT and React router dom etc are the main library that I have used for making product appearance, components logic.',
            'Optimization purpose using react-dev-tools and useMemo hooks.',
            'Maintained the code quality, linting, eﬀective PR.',
            "Involved in all web development life-cycle from translating designs into high-quality code from scratch, deployment and it's maintenance.",
        ],
    },
    {
        year: 'Aug 2020- Dec 2021',
        title: 'Web Developer',
        subTitle: 'Web tools and technologies',
        text: [
            'Making hybrid app by using Ionic framework and perform rest api with Asyc await.',
            'Made webPages using Angular8 rxjs and reusable atomic, isolated, optimized components with scalable code.',
            'Deployment knowledge using Heroku and Ec2 with Docker images. Familiear with Jenkins and Nginx',
        ],
    },
    {
        year: 'Aug 2018-Sept 2018',
        title: 'FrontEnd Developer',
        subTitle: 'Web tools and technologies',
        text: [
            'Learn Angular 6 and its core concept with RXJS.',
            'Making Component and passing data to it . ',
            'AWS service for Serverless microservices learn and made using by (S3,AWS lamda,dynamoDB,IMA) and deployed webPages on EC2',
        ],
    },
]
const educationalContents = [
    {
        year: 'jul 2015-Sept 2019',
        title: 'Bachelor of Engineering ',
        subTitle: 'Sagar Institute of Science & Technology',
        text: 'Computer Science with 7.3CGPA',
    },
    {
        year: 'July 2012-June 2014',
        title: 'Aditya Birla Intermediate College',
        subTitle: 'Renukoot ,Sonebhadra (Uttar Pradesh),India',
        text: 'Science Stream',
    },
    {
        year: 'July 2010-June 2012',
        title: 'Aditya Birla Intermediate College',
        subTitle: 'Renukoot ,Sonebhadra (Uttar Pradesh),India',
        text: 'Science Stream ',
    },
]
const Resume = () => {
    return (
        <ResumeStyle>
            <Title title="Resume" span="Resume" />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle
                        icon={<BusinessCenter />}
                        title="Working Experince"
                    />
                </div>
                <div className="resume-content">
                    {resumeContents.map((content) => (
                        <ResumeItem key={content.year} {...content} />
                    ))}
                </div>
                <div className="small-title u-margin">
                    <SmallTitle
                        icon={<SchoolIcon />}
                        title="Educational Qualification"
                    />
                </div>
                <div className="resume-content">
                    {educationalContents.map((content) => (
                        <ResumeItem key={content.year} {...content} />
                    ))}
                </div>
            </InnerLayout>
        </ResumeStyle>
    )
}

const ResumeStyle = styled.div`
    .small-title {
        padding-bottom: 2rem;
    }
    .u-margin {
        margin-top: 2rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`

export default Resume
