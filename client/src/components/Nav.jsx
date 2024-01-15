import { Link } from "react-router-dom"
import logoicon from '../images/logo-transparent-png.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/main.scss'

export default function divelogNav(){
  
  return(
<>
    <Navbar style={{ backgroundColor: 'rgb(212, 236, 221)' }} data-bs-theme="dark">
    <Link to='/'><img className='divelog-logo' src={logoicon} alt='divelog-logo'></img></Link>
      <Container>
        <Nav className="ms-auto" style={{fontWeight: 'bold' ,fontSize: '28px'}}>
          <Nav.Link href="/login" style={{ color: '#345B63'}}>Login</Nav.Link>
          <Nav.Link href="/register" style={{ color: '#345B63', marginLeft: '50px'}}>Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
  }
