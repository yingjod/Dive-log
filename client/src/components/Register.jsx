import { Form, useActionData, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import flipper from '../images/diving-mask-snorkel.png'

//Styling
import '../styles/main.scss';

export default function Register() {

  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])

  //Disable scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <div className='alllogin'>
        <Form method="post" className='wrapper' >
          <h1>Register</h1>
          <div className='input-box input' style={{ marginTop: '15px', height: '52px' }}>
            <input type="text" name="username" placeholder='Username' className='block' required />
          </div>
          <div className='input-box input' style={{ marginTop: '15px', height: '52px' }}>
            <input type="text" name="bio" placeholder='Bio' className='block' required />
          </div>
          <div className='input-box input' style={{ marginTop: '15px', height: '52px' }}>
            <input type='email' name='email' placeholder='Email' className='block' required />
          </div>
          <div className='input-box input' style={{ marginTop: '15px', height: '52px' }}>
            <input type="password" name="password" placeholder='Password' className='block' required />
          </div>
          <div className='input-box input' style={{ marginTop: '15px', height: '52px' }}>
            <input type="password" name="password_confirmation" placeholder='Confirm Password' className='block' required />
          </div>
          <div style={{ color: 'red' }}>
            {res ? (
              res.data.username ? (
                <p>{res.data.username}</p>
              ) : (
                res.data.non_field_errors ? (
                  <p>{res.data.non_field_errors}</p>
                ) : (
                  <p> {res.data.email}</p>
                )
              )
            ) : null}
          </div>
          <div className="input-box button" style={{ marginTop: '20px' }}>
            <button type="submit" style={{ marginTop: '15px', height: '52px', width: '150px' }}>Register</button>
          </div>
          <h3 style={{ marginTop: '15px', fontSize: '15px' }}>Already have an account? <a href="/login">Login</a></h3>
        </Form>
        <img src={flipper} className='image-mask' />
      </div>
    </>
  );
}
