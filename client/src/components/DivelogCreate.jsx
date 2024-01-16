import { Form, useActionData, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import '../styles/main.scss';
import { Link } from 'react-router-dom'


export default function DivelogCreate(){

  const [divespotOptions, setDivespotOptions] = useState([]);
  const [selectedDivespot, setSelectedDivespot] = useState('');

  useEffect(() => {

    const fetchDivespotOptions = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/divespot/')
        const data = await response.json()
        console.log('Divespot data:', data)
        setDivespotOptions(data)
      } catch (error) {
        console.error('Error fetching divespot options:', error);
      }
    };

    fetchDivespotOptions();
  }, []);

  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {

    if (res?.status === 201) {
      console.log('created successfully')
      navigate(`/divelog/${res.data.id}`)
    }
  }, [res, navigate])

  return(
<>
  <h1>Create Dive-log</h1>
  
  <Form method="post"  >
    <input type="date" name="date" placeholder='date' />

    <select
          name="divespot"
          value={selectedDivespot}
          onChange={(e) => setSelectedDivespot(e.target.value)}
        >
          <option value="">Select Divespot</option>
          {divespotOptions.map((divespot) => (
          <option key={divespot.id} value={divespot.id}>
            {divespot.spotname} - {divespot.country}
          </option>
          ))}
        </select>

    <input type="number" name="pickTanks" placeholder='pickTanks' />
    <input type="number" name="depth" placeholder='depth' />
    <input type="number" name="divingtime" placeholder='divingtime' />
    <input type="number" name="weight" placeholder='weight' />
    <input type="number" name="temperature" placeholder='temperature' />
    <input type="number" name="visibility" placeholder='visibility' />
    <input type="text" name="suit" placeholder='suit' />
    <input type="text" name="partner" placeholder='partner' />
    <textarea type="text" name="note" placeholder='note' />
    <button type="submit">Create</button>

    {res && <p>{res.data.bio}</p>}
  </Form>
  </>
  )}


