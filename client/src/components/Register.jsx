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

  return(
    <>
        <h1>Register</h1>
        <Form method="post" >

          <input type="text" name="username" placeholder='Username' />
          <input type='email' name='email' placeholder='Email'/>
          <input type="password" name="password" placeholder='Password' />
          <input type="password" name="password_confirmation" placeholder='Confirm Password' />
          <button type="submit">Register</button>
          {res && <p>{res.data.bio}</p>}

        </Form>

    </>
      );
    }
