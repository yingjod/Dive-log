import { Link ,useNavigate} from "react-router-dom"
import logoicon from '../images/logo-transparent-png.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/main.scss'

import { activeUser, removeToken } from '../utilities/helpers/common'

export default function divelogNav(){

  const navigate = useNavigate();

  function handleLogOut(){
    // Remove token from storage
    removeToken()
    // Navigate to the log in page
    navigate('/')
  }
  
  return(
<>
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: 'rgb(212, 236, 221)' }} data-bs-theme="dark">
    <Link to='/'><img className='divelog-logo' src={logoicon} alt='divelog-logo'></img></Link>
      <Container>
      <Nav className="ms-auto" style={{fontWeight: 'bold' ,fontSize: '28px'}}>
      { activeUser() ?
              <>    
              <div className="mid">       
                <Nav.Link href="/profile" style={{ color: '#345B63', marginRight:'40px'}}>My Dive-log</Nav.Link>
                <Nav.Link href="/divelog/create" style={{ color: '#345B63', marginRight:'40px'}}>Create</Nav.Link>
                <Nav.Link href="/" onClick={handleLogOut} style={{ color: '#345B63', marginRight:'40px'}}>Log out</Nav.Link>
              </div>
              </>
              :
              <>
                <Nav.Link href="/login" style={{ color: '#345B63',marginRight:'40px'}}>Login</Nav.Link>
                <Nav.Link href="/register" style={{ color: '#345B63',marginRight:'40px'}}>Register</Nav.Link>
              </>
            }
        </Nav>
      </Container>
    </Navbar>
  </>
  )
  }
