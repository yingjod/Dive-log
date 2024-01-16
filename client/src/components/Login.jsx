import '../styles/main.scss';
import {Form, useActionData, useNavigate} from 'react-router-dom'
import { setToken } from '../utilities/helpers/common'
import { useEffect } from 'react';

export default function Login(){


  const res = useActionData()
  console.log(res)  
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 200) {
      setToken(res.data.access)
      navigate('/profile')
    }
  }, [res, navigate])

  return(
    <>
        <h1>Login</h1>
        <Form method="post" >

          <input type="text" name="email" placeholder='Email' />
          <input type="password" name="password" placeholder='Password' />
          <button type="submit">Login</button>
          {res && <p>{res.data.bio}</p>}

        </Form>

    </>
      );
    }
