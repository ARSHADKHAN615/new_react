import { Box, Circle } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import '../styles/custom.css'


export default function Navigation() {
    const AllCountItems = useSelector((state) => state.cart)
    return (
        <MainNav>
            <NavContainer>
                <div>
                    <h2>LOGO</h2>
                </div>
                <div>
                    <ul className="navLinks">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/products">Product</NavLink></li>
                        <li><NavLink to="/cart">
                            <Box display='flex'>
                                <Box>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    Cart
                                </Box>
                                <Circle size='20px' bg='tomato' color='white'>
                                   {AllCountItems.length}
                                </Circle>

                            </Box>
                        </NavLink></li>
                    </ul>
                </div>
            </NavContainer>
        </MainNav>
    )
}

const NavContainer = styled.div`
   max-width: 90%;
   display:  flex;
   justify-content: space-around;
   align-items: center;
   background-color: aqua;
`
const MainNav = styled.nav`
   padding: 1rem 0rem;
   background-color: aqua;
`