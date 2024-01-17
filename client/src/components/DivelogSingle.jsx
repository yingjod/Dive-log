import { useLoaderData } from "react-router-dom"
import '../styles/main.scss';


export default function DivelogSingle() {
  const divelog = useLoaderData()
  console.log(divelog)

  return (
    <>
      <h1>DivelogSingle</h1>
      <p>{divelog.note}</p>
    </>
  );
}

