import '../styles/main.scss';
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from '../utilities/helpers/common'
import { useEffect } from 'react';

export default function Login() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);


  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 200) {
      setToken(res.data.access)
      navigate('/profile')
    }
  }, [res, navigate])

  return (
    <>
      <div className='alllogin'>

        <Form method="post" className='wrapper' >
          <h2>Login</h2>
          <div className='input-box input' style={{marginTop:'15px',height:'52px'}}>
            <input type="text" name="email" placeholder='Email' className='block' required/>
          </div>
          <div className='input-box'style={{marginTop:'15px',height:'52px'}} >
            <input type="password" name="password" placeholder='Password' className='block' required/>
          </div>
          <div className="input-box button" style={{marginTop:'20px'}}>
            <button type="submit" style={{marginTop:'15px',height:'52px', width:'150px'}}>Login</button>
          </div>
          {res && <p>{res.data.bio}</p>}
        </Form>

      </div>

    </>
  );
}


// import '../styles/main.scss';
// import {Form, useActionData, useNavigate} from 'react-router-dom'
// import { setToken } from '../utilities/helpers/common'
// import { useEffect } from 'react';

// export default function Login(){


//   const res = useActionData()
//   console.log(res)  
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (res?.status === 200) {
//       setToken(res.data.access)
//       navigate('/profile')
//     }
//   }, [res, navigate])

//   return(
//     <>
//         <h1>Login</h1>
//         <Form method="post" >

//           <input type="text" name="email" placeholder='Email' />
//           <input type="password" name="password" placeholder='Password' />
//           <button type="submit">Login</button>
//           {res && <p>{res.data.bio}</p>}

//         </Form>

//     </>
//       );
//     }