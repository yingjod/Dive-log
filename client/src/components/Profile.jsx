import { useLoaderData } from "react-router-dom"
import '../styles/main.scss';


export default function divelogAll(){
  const diveloglist = useLoaderData
  console.log(diveloglist)
  return<h1>Profile</h1>
}

