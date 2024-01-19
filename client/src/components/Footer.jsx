import { Link } from 'react-router-dom'
import '../styles/main.scss'

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

//Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
  return (
    <footer className='main-footer'>
      <Container>
        <Row className='footer'>
          <Col>
            <Link target='_blank' to='https://github.com/yingjod' className='links'>
            <FontAwesomeIcon icon={faGithub} /> YL</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
