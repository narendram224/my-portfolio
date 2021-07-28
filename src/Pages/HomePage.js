import React, { useEffect } from 'react'
import styled from 'styled-components'
import Particless from '../Components/Particles'
import ListAlt from '@material-ui/icons/AssessmentOutlined'
import FacebookIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const HomePage = ({ setTitle }) => {
    useEffect(() => setTitle('Home'), [])
    return (
        <HomeHeaderStyle>
            <div className="p-particle">
                <Particless />
                <div className="typography">
                    <h1>
                        Hi I'am <span>Narendra Maurya</span>
                    </h1>
                    <p>
                        "On the paper I have 1.3 years of experience but in
                        reality the company given to me 3 years of experience
                        beacause I'm a <span>Complan</span> boy. "
                    </p>
                    <div className="icons">
                        <a
                            href="https://www.linkedin.com/in/narendra-kumar-maurya-69303a165/"
                            className="icon i-facebook"
                            target="_blank">
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://github.com/narendram224/"
                            className="icon i-github"
                            target="_blank">
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://stackoverflow.com/users/11711849/narendra-maurya"
                            className="icon i-stack"
                            target="_blank">
                            <ListAlt />
                        </a>
                    </div>
                </div>
            </div>
        </HomeHeaderStyle>
    )
}
const HomeHeaderStyle = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particle {
        /* position:absolute;
            top:0;
            left:0;
            width:100%; */
    }
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 2px solid var(--border-color);
                transition: all 0.4s ease-in-out;
                &:hover {
                    cursor: pointer;
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                svg {
                    margin: 0.5rem;
                }
            }
            .i-facebook {
                &:hover {
                    border: 2px solid rgb(10 102 194);
                    color: rgb(10 102 194);
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid var(--border-color);
                    color: var(--border-color);
                }
            }
            .i-stack {
                &:hover {
                    border: 2px solid #f48024;
                    color: #f48024;
                }
            }
        }
    }
`

export default HomePage
