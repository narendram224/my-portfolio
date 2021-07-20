import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../Assets/imgs/img4.jpeg'
const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="nav-active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="nav-active">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="nav-active">Resume</NavLink>
                </li> <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="nav-active">PortFolio</NavLink>
                </li>
                 
                 <li className="nav-item">
                    <NavLink to="/contact" activeClassName="nav-active">Contact</NavLink>
                </li>
            </ul>
            <footer className="footer"> 
                <p>@2021 Narendra Portfolio Website</p>
            </footer>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    width:100%;
    height: 100%;
    border-right:1px solid var(--border-color);
    .avatar {
        width: 100%;
        border-bottom:1px solid var(--border-color);
        text-align:center;
        padding:1rem 0;
        img{
            width:40%;
            border-radius:50%;
            border:8px solid var(--border-color);
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        .nav-active{
            background-color:var(--primary-color);
        }
        li{
            display:block;
            a{
                display:block;
                position: relative;
                padding:0.2rem 0;
                letter-spacing:1px;
                text-transform:uppercase;
                transition:all 0.4s ease-in-out;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content:"";
                    position:absolute;
                    top:0;
                    left:0;
                    width:0;
                    height:50%;
                    background-color:var(--primary-color);
                transition:all 0.4s cubic-bezier(1,-0.22,.32,.95);
                    opacity: 0.21 ;
                    transform-origin:top;
                }
            }
            a:hover::before{
                width: 100%;
                height:100%;
            }
        }
    }
    .footer{
        border-top: 1px solid var(--border-color);
        width:100%;
        p{
            font-size:1.1rem;
            padding:0.6rem 0;
            text-align: center;
            display:block;
        }
    }


`


export default Navigation
