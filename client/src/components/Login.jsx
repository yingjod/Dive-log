import '../styles/main.scss';
import {Form, useActionData, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

export default function Login(){


  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 200) {
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
