import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav`
  background-color:#cbe8ba;
  height: 60px;
  display: flexbox;
  position: sticky;
  z-index: 10;
  padding: 0.5rem calc((100vw - 1000px) / 2);

`
export const NavLink = styled(Link)`
    font-weight: bold;
    color:grey;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%
    cursor: PointerEvent;

    &.active{
      color:#243e16;
    }
`
export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top:0;
    margin-bottom: 0;
`

export const Header = styled.h1`
    position: absolute;
    left: 10px;
    color:#243e16;
    display: block;
    @media (max-width: 1023px){
        display: none;
    }
`