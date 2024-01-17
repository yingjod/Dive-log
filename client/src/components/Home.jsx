import '../styles/main.scss';
import Image from 'react-bootstrap/Image';
import Homeimg from '../images/REGISTER.png';
import  { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    // 在首頁進入時禁用滾動
    document.body.style.overflow = 'hidden';

    // 在組件卸載時（可能是切換到其他頁面），啟用滾動
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





