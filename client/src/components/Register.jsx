import '../styles/main.scss';
import {Form, useActionData, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import flipper from '../images/flipper-flipper-svgrepo-com.svg'

export default function Register(){

  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return(
    <>
    <div className='alllogin'>
      
        <Form method="post" className='wrapper' >
        <h1>Register</h1>

        <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>

          <input type="text" name="username" placeholder='Username' className='block' required/>
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type="text" name="bio" placeholder='Bio' className='block'  required/>
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type='email' name='email' placeholder='Email' className='block' required/>
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type="password" name="password" placeholder='Password' className='block' required/>
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type="password" name="password_confirmation" placeholder='Confirm Password' className='block' required/>
          </div>
          <div className="input-box button" style={{marginTop:'20px'}}>
          <button type="submit" style={{marginTop:'15px',height:'52px', width:'150px'}}>Register</button>
          </div>
          <h3 style={{ marginTop: '15px', fontSize: '15px' }}>Already have an account? <a href="/login">Login</a></h3>
        </Form>
        <img src={flipper} className='image-mask' />
 
    </div>
    </>
      );
    }
