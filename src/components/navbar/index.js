import React from 'react'
import{Nav, NavLink, NavMenu, Header, Btn} from "./NavbarElements"
import {Button} from '@material-ui/core'

const Navbar = () => {
    return (
        <>
         <Nav>
            <NavMenu>
                <Header>SmartBiogas</Header>
                <NavLink to="/graphic">
                    Grafik
                </NavLink>
                <NavLink to="/logdata" activeStyle>
                    Data Historis
                </NavLink>
                <NavLink to="/">
                    <Btn>
                        <Button type='submit' color='success' variant='contained'>Log Out</Button>
                    </Btn>
                </NavLink>
            </NavMenu>
         </Nav>  
        </>
    )
}

export default Navbar
