import { useLoaderData } from "react-router-dom"
import { Form, useActionData, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import '../styles/main.scss';
import { Link } from 'react-router-dom'


export default function DivelogEdit() {

  const [divespotOptions, setDivespotOptions] = useState([]);


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
    console.log('useeffect',res)
    if (res?.status === 200) {
      console.log(res)
      console.log('created successfully')
      navigate(`/profile`)
    } else if (res?.status === 400) {
      console.error('Bad Request:', res.data);
    }
  }, [res, navigate]);

  const [selectedDivespot, setSelectedDivespot] = useState(divelog.divespot.id);

  return (
    <>
      <div className='allcreate'>
        <Form method="post" className='wrapper'>
          <h1>Edit Dive-log</h1>
          <input type="date" name="date" placeholder='date' defaultValue={divelog.date} className='block' style={{ marginTop: '15px', height: '52px' }} />

          <select
            name="divespot"
            onChange={(e) => setSelectedDivespot(e.target.value)}
            value={selectedDivespot}
            className='block' style={{ marginTop: '15px', height: '52px' }}
            required
          >

            <option value="">Select Divespot</option>
            {divespotOptions.map((divespot) => (
              <option key={divespot.id} value={divespot.id} >
                {divespot.spotname} - {divespot.country}
              </option>
            ))}
          </select>

          <input type="number" step="0.01" name="pickTanks" placeholder='Pick tanks(L)' defaultValue={divelog.pickTanks} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="depth" placeholder='Depth(m)' defaultValue={divelog.depth} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" name="divingtime" placeholder='Diving time(min)' defaultValue={divelog.divingtime} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="weight" placeholder='Weight(kg)' defaultValue={divelog.weight} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="temperature" placeholder='Temperature(°C)' defaultValue={divelog.temperature} className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="visibility" placeholder='Visibility(m)' defaultValue={divelog.visibility} className='block' style={{ marginTop: '15px', height: '52px' }} />
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