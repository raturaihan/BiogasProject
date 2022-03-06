import React from 'react'
import{Nav, NavLink, NavMenu, Header, Btn} from "./NavbarElements"
import {Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

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
                    Grafik
                </NavLink>
                <NavLink to="/logdata">
                    Data Historis
                </NavLink>
                <NavLink to="/">
                    <Btn>
                        <Button type='submit' color='success' variant='contained' onClick={handleSubmit}>Log Out</Button>
                    </Btn>
                </NavLink>
            </NavMenu>
         </Nav>  
        </>
    )
}

export default Navbar
