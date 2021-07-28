import React from 'react'
import styled from 'styled-components'

const ResumeItem = ({year,title,subTitle,text}) => {
    return (
        <ResumeItemStyled>
                <div className="left-content">
    <p>{year}</p>
                </div>
                <div className="right-content">
    <h5>{title}</h5>
    <h6>{subTitle}</h6>
    <p>{text}</p>
                </div>

        </ResumeItemStyled>
    )
}
const ResumeItemStyled = styled.div`
    display:flex;
    &:not(:last-child){
        padding-bottom:2rem;
    }
    .left-content{
        width:40%;
        padding-left:20px; 
        position:relative;
        &::before{
            content:"";
            position:absolute;
            top:10px;
            left:-7.8px;
            height:13px;
            width:13px;
            border-radius:50%;
            border:1px solid var(--border-color);
            background-color:var(--background-dark-color);
        }   
        p{
            display:inline-block;
            font-size:0.8rem;

        }
    }
    .right-content{
        padding-left:3rem;
        position:relative;
        &::before{
            content:"";
            position:absolute;
            top:17px;
            left:0;
            height:2px;
            width:2.5rem;
            background-color:var(--border-color);
        }
        h5{
            color:var(--primary-color);
            font-size:1.5rem;
            padding-bottom:0.3rem;
        }
        h6{
            padding-bottom:0.1rem;
            font-size:0.9rem;
            color:var(--white-color);
        }

    }
`

export default ResumeItem
