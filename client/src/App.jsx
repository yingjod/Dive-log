import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from "./components/Nav"
import Spinner from 'react-bootstrap/Spinner'

//Styling
import './styles/main.scss';

export default function App() {
  const navigation = useNavigation()
  return (
    <>
      <Nav />
      <main>
        {
          navigation.state === 'idle' ?
            <Outlet />
            :
            <div className="centred">
              <Spinner animation='border' />
            </div>
        }
      </main>
      <Footer />
    </>
  )
}

