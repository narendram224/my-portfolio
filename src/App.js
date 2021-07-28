import { useEffect, useState } from 'react'

import styled from 'styled-components'
import SideBar from './Components/SideBar'
import {
    BrowserRouter as Router,
    Route,
    Switch as Switchs,
} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Switch from '@material-ui/core/Switch'
// import LightModeIcon from '@material-ui/icons/lig'
import LightModeIcon from '@material-ui/icons/Brightness7'
import NotesIcon from '@material-ui/icons/Notes'
import { IconButton } from '@material-ui/core'
function App() {
    const [theme, settheme] = useState('dark-theme')
    const [navToggle, setnavToggle] = useState(false)
    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])
    return (
        <Router initialRoute="home">
            <AppWrapper>
                <SideBar navToggle={navToggle} />
                <div className="theme">
                    <div className="left-dark-mode">
                        <div className="left-content">
                            {theme === 'dark-theme' ? (
                                <Brightness4Icon />
                            ) : (
                                <LightModeIcon />
                            )}
                        </div>
                        <div className="right-content">
                            <Switch
                                size="small"
                                value={theme}
                                color="default"
                                checked={theme == 'dark-theme'}
                                onChange={() =>
                                    theme == 'dark-theme'
                                        ? settheme('light-theme')
                                        : settheme('dark-theme')
                                }
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="menu_icon_wrapper">
                    <IconButton
                        aria-label="menu"
                        onClick={() => setnavToggle(!navToggle)}>
                        <NotesIcon />
                    </IconButton>
                </div>
                <MainWrapper>
                    <div className="lines">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                        <div className="line-4"></div>
                    </div>

                    <Switchs>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route path="/about" exact>
                            <AboutPage />
                        </Route>
                        <Route path="/resume" exact>
                            <ResumePage />
                        </Route>
                        <Route path="/portfolios" exact>
                            <PortfolioPage />
                        </Route>
                        <Route path="/contact" exact>
                            <ContactPage />
                        </Route>
                    </Switchs>
                </MainWrapper>
            </AppWrapper>
        </Router>
    )
}
const AppWrapper = styled.div`
    .left-dark-mode {
        position: fixed;
        right: 0;
        top: 10%;
        background-color: var(--background-light-color-2);
        width: 4rem;
        height: 2rem;
        display: flex;
        z-index: 15;
        align-items: center;
        justify-content: center;

        svg {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            color: var(--white-color);
        }
    }
    .nav-toggler {
        transform: translateX(0px);
        z-index: 20;
    }
    .menu_icon_wrapper {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        .menu_icon_wrapper {
            display: block;
            transition: all 0.4s ease-in-out;
            position: fixed;
            right: 8%;
            top: 9%;
            z-index: 15;
            translate: transform(rotateX(90deg));
            span {
                color: var(--white-color);
            }
        }
    }
`
const MainWrapper = styled.main`
    position: relative;
    margin-left: 13.3rem;
    min-height: 100vh;

    .lines {
        position: absolute;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        z-index: -1;
        .line-1,
        .line-2,
        .line-3,
        .line-4 {
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
        }
    }
    @media screen and (max-width: 1200px) {
        margin-left: 0px;
    }
`

export default App
