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
        year: 'jul 2018-Sept 2018',
        title: 'FrontEnd Developer',
        subTitle: 'Web tools and technologies',
        text:
            'oss ds fs fs s fs fs f sf ss fs fs fs fg t ete e te te te te te te te te te te te te te te te te te te te te',
    },
    {
        year: 'Aug 2018-Dec 2020',
        title: 'Frontend Developer',
        subTitle: 'Web tools and technologies',
        text:
            'oss ds fs fs s fs fs f sf ss fs fs fs fg t ete e te te te te te te te te te te te te te te te te te te te te',
    },
    {
        year: 'Jan 2020-March 2021',
        title: 'Web Developer',
        subTitle: 'Web tools and technologies',
        text:
            'oss ds fs fs s fs fs f sf ss fs fs fs fg t ete e te te te te te te te te te te te te te te te te te te te te',
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
                    {resumeContents.map((content) => (
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
