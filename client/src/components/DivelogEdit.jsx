import { useLoaderData } from "react-router-dom"
import { Form, useActionData, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import '../styles/main.scss';
import { Link } from 'react-router-dom'


export default function DivelogEdit() {

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
  const divelog = useLoaderData()


  useEffect(() => {
    if (res?.status === 201) {
      console.log('created successfully')
      navigate(`/divelog/${res.data.id}`)
    } else if (res?.status === 400) {
      console.error('Bad Request:', res.data);
    }
  }, [res, navigate]);

  return (
    <>
      <div className='allcreate'>


        <Form method="post" className='wrapper'>
          <h1>Edit Dive-log</h1>
          <input type="date" name="date" placeholder='date' defaultValue={divelog.date} className='block' style={{ marginTop: '15px', height: '52px' }} />

          <select
            name="divespot"
            onChange={(e) => setSelectedDivespot(e.target.value)}
            defaultValue={divelog.divespot.id}
            className='block' style={{ marginTop: '15px', height: '52px' }}
          >

            <option value="">Select Divespot</option>
            {divespotOptions.map((divespot) => (
              <option key={divespot.id} value={divespot.id} >
                {divespot.spotname} - {divespot.country}
              </option>
            ))}
          </select>

          <input type="number" name="pickTanks" placeholder='Pick tanks(L)' defaultValue={divelog.pickTanks} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" name="depth" placeholder='Depth(m)' defaultValue={divelog.depth} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" name="divingtime" placeholder='Diving time(min)' defaultValue={divelog.divingtime} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" name="weight" placeholder='Weight(kg)' defaultValue={divelog.weight} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" name="temperature" placeholder='Temperature(°C)' defaultValue={divelog.temperature} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" name="visibility" placeholder='Visibility(m)' defaultValue={divelog.visibility} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="text" name="suit" placeholder='Suit(Dry/Wet/Short)' defaultValue={divelog.suit} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="text" name="partner" placeholder='Partner(name)' defaultValue={divelog.partner} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <textarea type="text" name="note" placeholder='Note' defaultValue={divelog.note} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <button type="submit"  style={{marginTop:'15px',height:'52px', width:'150px'}}>Complete</button>

          {res && <p>{res.data.bio}</p>}
        </Form>
      </div>
    </>
  )
}
