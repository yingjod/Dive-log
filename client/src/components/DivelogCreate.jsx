import { Form, useActionData, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

//Styling
import '../styles/main.scss';

export default function DivelogCreate() {

  const res = useActionData()
  const navigate = useNavigate()
  console.log('res', res)

  const [divespotOptions, setDivespotOptions] = useState([]);
  const [selectedDivespot, setSelectedDivespot] = useState({});

  //Divespot dropdown
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

  useEffect(() => {
    if (res?.status === 201) {
      console.log('created successfully')
      navigate(`/profile`)
    }
  }, [res, navigate])

  return (
    <>
      <div className='allcreate'>
        <Form method="post" className='wrapper' >
          <h1>Create Dive-log</h1>
          <input type="date" name="date" placeholder='date' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <select
            name="divespot"
            value={selectedDivespot}
            onChange={(e) => setSelectedDivespot(e.target.value)}
            className='block'
            style={{ marginTop: '15px', height: '52px' }}
            required
          >
            <option value="">Select Divespot</option>
            {divespotOptions.map((divespot) => (
              <option key={divespot.id} value={divespot.id}>
                {divespot.spotname} - {divespot.country}
              </option>
            ))}
          </select>
          <input type="number" step="0.01" name="pickTanks" placeholder='Pick tanks(L)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="depth" placeholder='Depth(m)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" name="divingtime" placeholder='Diving time(min)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="weight" placeholder='Weight(kg)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="temperature" placeholder='Temperature(°C)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="number" step="0.01" name="visibility" placeholder='Visibility(m)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="text" name="suit" placeholder='Suit(Dry/Wet/Short)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <input type="text" name="partner" placeholder='Partner(name)' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <textarea type="text" name="note" placeholder='Note' className='block' style={{ marginTop: '15px', height: '52px' }} />
          <button type="submit" style={{ marginTop: '15px', height: '52px', width: '150px' }}>Create</button>
        </Form>
      </div>
    </>
  )
}


