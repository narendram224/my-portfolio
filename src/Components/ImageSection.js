import React from 'react'
import styled from 'styled-components'
import resume from '../Assets/imgs/img1.jpg'
import PrimaryButton from './PrimaryButton'
const ImageSection = () => {
    return (
       <ImageSectionStyled >
           <div className="left_content">
           <img src={resume} alt="resume Img" />

           </div>
           <div className="right_content">
            <div className="sub_title">
                <h4>I am <span>Lorem ipusm</span></h4>

            </div>
            <p className="paragraph">
            lrorw rfsforwr fsfs show goods

            </p>
            <div className="about-info">
                <div className="info-title">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Nationality</p>
                    <p>Languages</p>
                    <p>Location</p>
                    <p>Service</p>

                </div>
                <div className="info">
                    <p><span>:</span>Narendra Kumar Maurya</p>
                    <p><span>:</span>24</p>
                    <p><span>:</span>Indian</p>
                    <p><span>:</span>English , Hindi</p>
                    <p><span>:</span>Bummanhali,Banglore,Karnataka ,India</p>
                    <p><span>:</span>Web Developer</p>

                </div>
            </div>
            <PrimaryButton title="Download Resume" />
           </div>

       </ImageSectionStyled>
    )
}
const ImageSectionStyled = styled.div`
    margin-top:5rem;
    display:flex;
    .left_content{
        width: 100%;
        img{
            width: 90%;
        }
    }
    .right_content{
        h4{
            font-size:2rem;
            color: var(--white-color);
            span{
                font-size:2rem;
            }
        }
        .paragraph{
            padding :0.4rem 0;
            font-size:1rem;
            color:var(--secondary-color);
        }
        .about-info{
            display:flex;
            font-size:0.9rem;
            .info-title{
                padding-right:3rem !important;
                p{
                    font-weight:900;
                }
            }
            .info-title , .info{
                span{
                    color:var(--secondary-color);
                    margin-right:0.1rem;
                }
                padding:0.3rem 0;
            }
        }
    }

`
export default ImageSection
