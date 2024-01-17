import '../styles/main.scss';
import {Form, useActionData, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

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

          <input type="text" name="username" placeholder='Username' className='block' />
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type="text" name="bio" placeholder='bio' className='block'/>
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type='email' name='email' placeholder='Email' className='block'/>
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type="password" name="password" placeholder='Password' className='block' />
          </div>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
          <input type="password" name="password_confirmation" placeholder='Confirm Password' className='block'/>
          </div>
          <div className="input-box button" style={{marginTop:'20px'}}>
          <button type="submit" style={{marginTop:'15px',height:'52px', width:'150px'}}>Register</button>
          </div>
          {res && <p>{res.data.bio}</p>}

        </Form>
    </div>
    </>
      );
    }
