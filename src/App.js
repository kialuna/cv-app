
import { useState } from 'react';
import Board  from "./xoxo.js"
import { Home, VideogameAssetOutlined  } from '@mui/icons-material';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
const[collapsed, setCollapsed] = useState(false);


const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
};


const HomePage = () => {
    return (
      <>
        <h1 className="header">Welcome to Kia's React app!</h1>
        <h3>This is a great place</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </>
    );
  };

    return(
        <div style={{ display: "flex", height: "100vh" }}>
         <Sidebar collapsed={collapsed}>
            <Menu>
                <MenuItem 
                component = {<Link to="home" className="link" />}
                icon={<Home/>}>
                    Home
                </MenuItem>
                <MenuItem
                component={<Link to="tictactoe" className='link'/>}
                icon= {<VideogameAssetOutlined/>} >
                    Games
                </MenuItem>

            </Menu>
            <button onClick={handleToggleSidebar}>Toggle</button>
        </Sidebar>    
        <section id="main-section">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="tictactoe" element={<Board />} />
        </Routes>
      </section>
        </div>

    // <Router>
    //     <Switch>
    //         <Route exact path="/" component={Board}/>
    //     </Switch>
    // </Router>
    )
}