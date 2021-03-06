import React from 'react'
import{Nav, NavLink, NavMenu, Header} from "./NavbarElements"
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Buttonlog from "./Buttonlog"
import IconButtonlog from "./Buttonlogmob"

const Navbar = () => {
    const navigate = useNavigate();

    function handleSubmit(event) {
        navigate('/'); 
        localStorage.clear();
    }

    return (
        <>
         <Nav>
            <NavMenu>
                <Header>SmartBiogas</Header>
                <NavLink to="/graphic">
                    GRAFIK
                </NavLink>
                <NavLink to="/logdata">
                    DATA HISTORIS
                </NavLink>
                <NavLink to="/">
                    <Buttonlog startIcon={<LogoutIcon />} type='submit' variant='outlined' onClick={handleSubmit}>Log Out</Buttonlog>
                    <IconButtonlog aria-label="logout" size="medium" onClick={handleSubmit}><LogoutIcon /></IconButtonlog>
                </NavLink>
            </NavMenu>
         </Nav>  
        </>
    )
}

export default Navbar
