import '../styles/main.scss';
import Image from 'react-bootstrap/Image';
import Homeimg from '../images/PA260905.png'

export default function Home(){
  return (
  <>
  <h1>home</h1>
 <Image src={Homeimg} className='homeimg' style={{ width: '100%', height: '50%' }}></Image>
  </>
 )
}





