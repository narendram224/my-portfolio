import React from 'react'
import styled from 'styled-components'
import resume from '../Assets/imgs/img1.jpg'
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
                <div className="info-title">
                    <p>:Narendra Kumar Maurya</p>
                    <p>:24</p>
                    <p>:Indian</p>
                    <p>:English , Hindi</p>
                    <p>:Bummanhali,Banglore,Karnataka ,India</p>
                    <p>Web Developer</p>

                </div>
            </div>
           </div>

       </ImageSectionStyled>
    )
}
const ImageSection = styled.div`

`
export default ImageSection
