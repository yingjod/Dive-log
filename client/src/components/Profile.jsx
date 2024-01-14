import { useLoaderData } from "react-router-dom"


export default function divelogAll(){
  const diveloglist = useLoaderData
  console.log(diveloglist)
  return<h1>Profile</h1>
}

