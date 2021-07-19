import styled from 'styled-components';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <AppWrapper>
     <SideBar />
    </AppWrapper>
    </Router>
  );
}
const AppWrapper  = styled.div`
`


export default App;
