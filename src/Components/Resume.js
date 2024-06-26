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
        id: 6,
        year: 'Jan 2023 - Present',
        title: 'Software Engineer ',
        subTitle: '[Leap Finance] , Banglore, karnataka,India',
        text: [
            'Developed a custom CMS from scratch in collaboration with backend developers and product managers to replace the existing Strapi system, aiming to reduce costs and overcome its limitations.',
            'Technologies Used:',
            'At the heart of our custom-built CMS lies a powerful stack, including Next.js 🔥, TypeScript 🎨, Redux 📚, Ant Design 🎨, React Query 🔍, Next Analyzer 🔍, and Sonar Qube 🔍 for ensuring top-notch code quality. 👨‍💻',
            '🚀 Implemented Server-Side Rendering (SSR) for all landing pages, resulting in fast load times and enhanced interactivity post-load, achieving a performance score of ~99%.',
            '🔐 Built internal Next.js APIs to handle a complex authentication system, ensuring secure and efficient user management.',
            '🤝 Collaborated closely with product managers to migrate all data from Strapi to the new CMS, ensuring a seamless transition and data integrity.',
            '🧪 Started writing comprehensive test cases for frontend components to ensure reliability and maintainability.',
            '👨‍🏫 Mentored a junior team member, providing guidance and support to improve their skills and collaboration within the team.',
            'Impact:',
            'Throughout this project, I have demonstrated my ability to collaborate effectively with cross-functional teams, my commitment to delivering high-quality solutions, and my passion for driving innovation and efficiency within Leap Finance. 🤝 My contributions have led to a 50% increase in content creation efficiency and a 25% reduction in content maintenance costs. 📊',

            '💸 Cost Reduction: Throughout this project, I have demonstrated my ability to collaborate effectively with cross-functional teams, my commitment to delivering high-quality solutions, and my passion for driving innovation and efficiency within Leap Finance. 🤝 My contributions have led to a 50% increase in content creation efficiency and a 25% reduction in content maintenance costs. 📊',
            '⚡ Performance Improvement: Enhanced page load times by 40%, leading to a performance score of ~99%.',
            '📦 Data Integrity: Successfully migrated over 10,000 data records from Strapi to the new CMS without data loss.',
            '📈 User Experience: Improved user experience with a 25% increase in user engagement metrics post-migration.',
            '🐛 Code Quality: Achieved a 20% reduction in code issues and bugs through the implementation of SonarQube.',
            '🔍 Testing: Enhanced code reliability by starting the implementation of test cases, leading to a reduction in post-deployment issues.',
            '🌱 Mentorship: Fostered team growth and collaboration by mentoring a junior member, contributing to their professional development and the overall productivity of the team.',
            "I am excited to continue pushing the boundaries of what's possible in the world of frontend development and content management, and I look forward to the opportunity to contribute my skills and expertise to your organization. 🌟 With a proven track record of delivering impactful results, I am confident that I can be a valuable asset to your team.",
        ],
    },
    {
        id: 1,
        year: 'Aug 2021 - Nov 2022',
        title: 'Software Engineer ',
        subTitle: '[BitClass] , Banglore, karnataka,India',
        text: [
            'During my tenure as a Frontend Developer at Bitclass, I had the privilege of contributing to the success of this dynamic live learning platform. With a focus on delivering exceptional user experiences, I spearheaded several impactful initiatives that drove growth, improved retention, and enhanced the overall platform performance.',
            'One of my key achievements was implementing a new responsive, mobile-first approach, which resulted in a 20% increase in mobile traffic. 📱 This strategic shift in design and development not only improved accessibility but also catered to the growing demand for seamless experiences on-the-go',
            'To further enhance user engagement and retention, I introduced the innovative "QuickBit" feature, which led to a remarkable increase in cash flow by 18%. 💰 This feature provided users with bite-sized, easily digestible content, fostering a more interactive and immersive learning experience',
            'Improve company retention from 12% to 20% with QuickBit feature',
            "Recognizing the importance of industry standards and accessibility, I took the initiative to rewrite the JSX code to meet the highest benchmarks. This not only improved the platform's SEO performance but also ensured that all users, regardless of their abilities, could access and navigate the platform with ease. 🌐",
            "As a  mentor, I had the opportunity to guide and expand the skills of two junior frontend developers, empowering them to enhance their expertise in JavaScript, Next.js, and React.js. 👨‍🏫 This collaborative effort not only strengthened the team's capabilities but also contributed to the overall growth and development of the Bitclass platform.",
            'To streamline the development process and enhance reusability, I spearheaded the creation of an in-house UI library, which saved over 100 hours of development time per month. 🕰️ This strategic move not only improved efficiency but also ensured a consistent and cohesive user experience across the platform.',
            'Collaborating closely with the product and marketing teams, I played a pivotal role in redesigning and improving the user interface to optimize activation and retention. 🤝 These efforts resulted in a significant boost in conversion rates, reaching up to 46%. 📈',
            'Recognizing the importance of a seamless payment experience, I worked closely with the payments team to save over 10,000 customers time and improve cash flow through the development of a modern, responsive customer experience. 💳',
            'Boosted conversion rate up to 46% by design and improvement .',
            'Finally, I successfully migrated the entire Bitclass app to Next.js, enabling the platform to handle an impressive 1,000 daily active users with ease. 🌐 This migration not only improved the overall performance but also laid the foundation for future scalability and innovation.',
            'Throughout my tenure at Bitclass, I have consistently demonstrated my ability to drive growth, enhance user experiences, and foster a culture of innovation. I am confident that my skills and expertise would be a valuable asset to your organization, and I look forward to the opportunity to contribute to your success.',
        ],
    },
    {
        id: 3,
        year: 'Jan 2020-March 2021',
        title: 'Sonftware Developer',
        subTitle: '[Navana Tech] ,Banglore,karnataka,India',
        text: [
            'Revolutionizing Chatbot Management: Building a Cutting-Edge CMS 🤖',
            'At Navana Tech, I had the opportunity to spearhead the development of a fully-functional Content Management System (CMS) for managing chatbot events. This CMS not only empowered our team to seamlessly control the UI and placement of the chatbot on the screen but also streamlined the overall chatbot management process.',
            'Mastering the Tech Stack: A Winning Combination 🛠️',
            'To bring this innovative CMS to life, I leveraged a powerful tech stack, including React, Redux with Immer.js, React Hooks, Material UI, JWT, and React Router DOM. This carefully curated selection of libraries and frameworks allowed me to create a visually appealing, component-driven, and secure application that met the highest standards.',
            'Optimizing for Performance: Leveraging React DevTools and useMemo 🚀',
            "Recognizing the importance of performance optimization, I utilized React DevTools and the useMemo hook to ensure the CMS operated at peak efficiency. By identifying and addressing performance bottlenecks, I was able to deliver a seamless user experience and maximize the system's responsiveness.",
            'Maintaining Code Quality and Collaboration 🧹',
            "Throughout the development process, I placed a strong emphasis on maintaining code quality, implementing robust linting practices, and facilitating effective code reviews through well-structured Pull Requests. This collaborative approach not only ensured the codebase's integrity but also fostered a culture of continuous improvement within the team.",
            'Driving the Full Development Lifecycle 🌐',
            "My involvement in this project spanned the entire web development lifecycle, from translating designs into high-quality code from scratch to deployment and ongoing maintenance. This end-to-end experience allowed me to gain a deep understanding of the project's requirements, challenges, and the importance of delivering a polished, production-ready solution.By highlighting these interactive points, I aim to showcase my technical expertise, problem-solving skills, and commitment to delivering exceptional results. I am confident that my experience and passion for frontend development would make me a valuable asset to your organization, and I look forward to the opportunity to discuss how I can contribute to your success.",
        ],
    },
    {
        id: 4,
        year: 'Aug 2020- Dec 2021',
        title: 'Web Developer (Intern)',
        subTitle: 'NxtLife technologies in Gurgaon,Haryana,India',
        text: [
            'Making hybrid app by using Ionic framework and perform rest api with Asyc await.',
            'Made webPages using Angular8 rxjs and reusable atomic, isolated, optimized components with scalable code.',
            'Deployment knowledge using Heroku and Ec2 with Docker images. Familiear with Jenkins and Nginx.',
        ],
    },
    {
        id: 5,
        year: 'Aug 2018-Sept 2018',
        title: 'FrontEnd Developer (Intern)',
        subTitle: 'CureOre.com in Bhopal,Madhaya-Pradesh,India',
        text: [
            'Learn Angular 6 and its core concept with RXJS.',
            'Making Component and passing data to it . ',
            'AWS service for Serverless microservices learn and made using by (S3,AWS lamda,dynamoDB,IMA) and deployed webPages on EC2.',
        ],
    },
]
const educationalContents = [
    {
        id: 1,
        year: 'Jul 2015-Sept 2019',
        title: 'Bachelor of Engineering ',
        subTitle: 'Sagar Institute of Science & Technology',
        text: 'Computer Science with 7.3CGPA',
    },
    {
        id: 2,
        year: 'July 2012-June 2014',
        title: 'InterMediate',
        subTitle: 'Aditya Birla Intermediate College,Renukoot,Sonebhadra,',
        text: 'Science Stream',
    },
    {
        id: 3,
        year: 'July 2010-June 2012',
        title: 'Higher Seconadary',
        subTitle:
            'Aditya Birla Intermediate College,Renukoot,Sonebhadra,Uttar-Pradesh,India',
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
                        <ResumeItem key={content.id} {...content} />
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
                        <ResumeItem key={content.id} {...content} />
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
