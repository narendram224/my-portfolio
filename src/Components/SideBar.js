import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const SideBar = () => {
    return (
      <SideBarStyled >
          <Navigation />
      </SideBarStyled>
    )
}
const SideBarStyled = styled.div`
    background-color:var(--sidebar-dark-color);
    height:100vh;
    width:16.3rem;
    position:fixed;
`


export default SideBar
