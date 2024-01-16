import { useLoaderData } from "react-router-dom"
import '../styles/main.scss';


export default function DivelogEdit(){
  const divelog = useLoaderData()
  console.log(divelog)

  return<h1> DivelogEdit</h1>
}

