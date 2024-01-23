/* eslint-disable camelcase */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '@/images/Logo.png'
import { FaShoppingBasket, FaUserPlus } from 'react-icons/fa'
import { useBasketContext } from '@/contexts/BasketContext'
import { useAuth0 } from '@auth0/auth0-react'

function LayoutsNavbar() {
  const { total_items } = useBasketContext()
  const { loginWithRedirect, logout, user: myUser } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/'
      }
    })
  }

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin
    })
  }

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={Logo} alt="Logo" height={50} /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="nav text-white" as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link className="nav text-white" as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link className="nav text-white" as={NavLink} to="/restaurants">Restaurants</Nav.Link>
            {
              myUser ? (
                <Nav.Link className="nav text-white" as={NavLink} to="/checkout">Checkout</Nav.Link>
              ) : (
                <span>&nbsp;&nbsp;</span>
              )
            }
          </Nav>

          <div className="d-flex flex-column flex-md-row">
            <Nav.Link className="btn btn-light mb-2 mb-md-0 me-0 me-md-2 fs-6 fw-light px-3 py-1 text-center" as={NavLink} to="/basket">
              <span className="basket-icon-container align-items-center">
                <FaShoppingBasket />
                <span className="rounded-circle text-black text-bold position-absolute d-flex align-items-center justify-content-center p-1" style={{ top: '-7px', right: '15px', width: '16px', height: '16px', fontSize: '0.75rem', backgroundColor: '#d8ec9c' }}>{total_items}</span>
              </span>
              Basket
            </Nav.Link>
            {
              myUser ? (
                <button
                  className="btn btn-light mb-2 mb-md-0 me-0 me-md-2"
                  onClick={handleLogout}
                  type="button"
                >
                  Logout
                </button>
              ) : (
                <div className="btn btn-light mb-2 mb-md-0 me-0 me-md-2 fs-6 fw-light px-3 py-1 text-center" onClick={handleLogin}>
                  <span
                    type="button"
                    className="login-icon-container align-items-center"
                  >
                    <FaUserPlus />
                  </span>Login
                </div>
              )
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LayoutsNavbar
