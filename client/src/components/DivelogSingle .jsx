import { useLoaderData } from "react-router-dom"

export default function DivelogSingle(){
  const divelog = useLoaderData()
  console.log(divelog)

  return<h1>DivelogSingle</h1>
}

