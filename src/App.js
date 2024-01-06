
import { useState } from 'react';
import Board  from "./xoxo.js"
import { Home, Folder, Message } from '@mui/icons-material';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
const[collapsed, setCollapsed] = useState(false);


const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
};

    return(
        <>
         <Sidebar collapsed={collapsed}>
            <Menu>
                <MenuItem icon={<Home/>}>Board</MenuItem>
            </Menu>
            <button onClick={handleToggleSidebar}>Toggle</button>
        </Sidebar>    
        <Board/>   
        </>

    // <Router>
    //     <Switch>
    //         <Route exact path="/" component={Board}/>
    //     </Switch>
    // </Router>
    )
}