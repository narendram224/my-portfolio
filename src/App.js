import styled from 'styled-components';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
function App() {
  return (
    <Router initialRoute="/home" >
    <AppWrapper>
     <SideBar />
     <MainWrapper>
       <div className="lines">
         <div className="line-1"></div>
         <div className="line-2"></div>
         <div className="line-3"></div>
         <div className="line-4"></div>
       </div>
       <Switch>
         <Route path="/home" exact>
           <HomePage />
         </Route>
         <Route path="/about" exact>
           <AboutPage />
         </Route>
         <Route path="/resume" exact >
           <ResumePage />
         </Route>
         <Route path="/portfolios" exact >
           <PortfolioPage />
         </Route>
         <Route path="/contact" exact>
           <ContactPage />
         </Route>
       </Switch>
     </MainWrapper>
    </AppWrapper>
    </Router>
  );
}
const AppWrapper  = styled.div`
`
const MainWrapper = styled.main`
    position: relative;
    margin-left:16.3rem;
    min-height:100vh;
    .lines{
      position:absolute;
      min-height:100vh;
      width: 100%;
      display:flex;
      justify-content:space-evenly;
      .line-1, .line-2 , .line-3,.line-4{
        width:1px;
        min-height:100vh;
        background-color:var(--border-color);
      }
    }

`


export default App;
