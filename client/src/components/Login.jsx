import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from '../utilities/helpers/common'
import { useEffect } from 'react';

//Styling
import '../styles/main.scss';
import mask from '../images/diving-mask-snorkel.png'

export default function Login() {

  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()

  //Disable scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  useEffect(() => {
    if (res?.status === 200) {
      setToken(res.data.access)
      navigate('/profile')
    } else if (res?.status === 401) {
      console.error('Authentication failed:', res.data.detail);
    }
  }, [res, navigate])

  return (
    <>
      <div className='alllogin'>
        <Form method="post" className='wrapper' >
          <h2>Login</h2>
          <div className='input-box input' style={{ marginTop: '15px', height: '52px' }}>
            <input type="text" name="email" placeholder='Email' className='block' required />
          </div>
          <div className='input-box' style={{ marginTop: '15px', height: '52px' }} >
            <input type="password" name="password" placeholder='Password' className='block' required />
          </div>
          <div className="input-box button">
            <button type="submit" style={{ marginTop: '15px', height: '52px', width: '150px' }}>Login</button>
          </div>
          <div style={{ color: 'red' }}>
            {res && <p>{res.data.detail}</p>}
          </div>
          <h3 style={{ marginTop: '15px', fontSize: '15px' }}>Don't Have an Account? <a href="/register">Register</a></h3>
        </Form>
        <img src={mask} className='image-mask' />
      </div>
    </>
  );
}