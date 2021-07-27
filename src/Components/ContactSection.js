import React from 'react'
import styled from 'styled-components'
import { MainLaout, InnerLaout } from '../Styled/Layout'
import Title from './Title'
import FieldItem from './FieldItem'
import PrimaryButton from './PrimaryButton'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItems from './ContactItems'


const ContactSection = () => {
    const ContactDetials = [{
        icon:<PhoneIcon/>,
        title:"Phone Number",
        contact1:"7905325093",  
        contact2:"9918569439",
        
},{
    icon:<EmailIcon/>,
    title:"Phone Number",
    contact1:"narendram224@gmail.com",  
    contact2:"9918569439",
    
},{
    icon:<LocationOnIcon/>,
    title:"Vill sdsfsds",
    contact1:"7905325093",  
    contact2:"9918569439",
    
}]
    return (
        <MainLaout>
            <Title title="Contact" span="Contact" />
            <ContactSectionStyle>

            <InnerLaout className="contact-section" >  
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get in touch</h4>
                    </div>
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name" id="name"  >Enter your Name*</label>
                            <input type="text" id="name "  />
                        </div>
                        <FieldItem name="email" id="email" label="Enter the Email*" />

                        <FieldItem name="subject" id="suject" label="Enter the Subject*" />
                        <div className="form-field">
                            <label htmlFor="textarea" id="name"  >Enter your Message*</label>
                            <textarea name="textarea" id="name " col="30" rows="8"  />
                        </div>
                        <div className="form-field">
                            <PrimaryButton title="Send Email" />
                        </div>
                    </form>
                </div>
                <div className="right-action">
                    {
                        ContactDetials.map((cItem)=> <ContactItems {...cItem} />)
                    }
                    {/* <ContactItems
                    icon={<PhoneIcon/>}
                    title="Phone Number"
                    contact1={7905325093}   
                    contact2={9918569439}
                    /> */}
                </div>
            </InnerLaout>
            </ContactSectionStyle>

        </MainLaout>
    )
}

const ContactSectionStyle = styled.section`
    .contact-section{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        .contact-title{
            h4{
                color:var(--white-color);
                padding:1rem 0;
                font-size:1.7rem; 
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top:0.2rem;
                position:relative;
                width:inherit;
                margin-top:1.5rem;
                label{
                    position:absolute;
                    top:-20px;
                    left:20px;
                    background-color:var( --background-dark-color);
                    padding:0 0.3rem;
                    color:inherit;
                }
                input{
                    border:1px solid var(--border-color);
                    outline:none;
                    background-color:transparent;
                    height:40px;
                    padding:0 15px;
                width:inherit;
                color:inherit;


                }
                textarea{
                    background-color:transparent;
                    border:1px solid var(--border-color);
                    outline:none;
                    color:inherit;
                    width:100%;
                    padding:0.6rem 1rem;
                }
            }
        }
    }

`
export default ContactSection
