import { Outlet, Link } from "react-router-dom"


function App() {
return(
<>
  <nav>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/login">Login</Link>&nbsp;
    <Link to="/register">Register</Link>
  </nav>
  <Outlet />
  <footer>dovelog.co</footer>
  <a href='https://github.com/yingjod'>Github</a>

</> 
  )
}

export default App
