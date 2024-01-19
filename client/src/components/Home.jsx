import { useEffect } from 'react';

//Styling
import '../styles/main.scss';
import Image from 'react-bootstrap/Image';
import Homeimg from '../images/Homeimg.png'


export default function Home() {

  //Disable scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <Image src={Homeimg} className='homeimg' style={{ minHeight: '100%' }}></Image>
    </>
  )
}





