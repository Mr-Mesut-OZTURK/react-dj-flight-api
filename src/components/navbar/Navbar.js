import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap'

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { LogoutAction } from '../../redux/actions/LoginActions'


const NavbarMenu = () => {

    const isLogin = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()

    const [navbarToggle, setNavbarToggle] = useState(false)

    const handleLogOut = () => {
        dispatch(LogoutAction())
    }


    return (
        <Navbar color="light" expand="md" dark className="px-5 bg-dark sticky-top">

            <NavbarBrand tag={Link} to="/">
                Ucuz Bilet.com
            </NavbarBrand>

            <NavbarToggler onClick={() => setNavbarToggle(!navbarToggle)} />

            <Collapse navbar isOpen={navbarToggle}>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/flights">
                            Flights
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown inNavbar nav>

                        <DropdownToggle caret nav>
                            Options
                        </DropdownToggle>

                        {
                            isLogin.length ?
                                (
                                    <DropdownMenu end>

                                        <DropdownItem>
                                            <NavLink tag={Link} to="/profile" className="text-dark">
                                                Profile
                                            </NavLink>
                                        </DropdownItem>

                                        <DropdownItem>
                                            <NavLink onClick={handleLogOut} className="text-dark">
                                                Logout
                                            </NavLink>
                                        </DropdownItem>

                                    </DropdownMenu>
                                ) : (
                                    <DropdownMenu end>

                                        <DropdownItem>
                                            <NavLink tag={Link} to="/login" className="text-dark">
                                                Login
                                            </NavLink>
                                        </DropdownItem>

                                        <DropdownItem>
                                            <NavLink tag={Link} to="/register" className="text-dark">
                                                Register
                                            </NavLink>
                                        </DropdownItem>

                                    </DropdownMenu>
                                )
                        }

                    </UncontrolledDropdown>
                </Nav>

            </Collapse>

        </Navbar>
    )
}

export default NavbarMenu
