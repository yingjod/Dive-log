import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getToken, activeUser } from '../utilities/helpers/common'

//Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//Styling
import loading from '../images/Loading.gif'
import '../styles/main.scss';


export default function divelogAll() {

  const navigate = useNavigate()
  const loggedInUserId = activeUser()

  const [diveLogs, setDiveLogs] = useState({})
  const [filteredDiveLogs, setFilteredDiveLogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    async function getUserDiveLogs() {
      try {
        if (getToken()) {
          const { data: diveLogs } = await axios.get(`/api/divelog/`, {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          })

          const loggedInUserId = activeUser();
          const filteredDiveLogs = diveLogs.filter(diveLog => diveLog.user?.id === loggedInUserId);
          console.log(filteredDiveLogs)

          setDiveLogs(filteredDiveLogs);
          setFilteredDiveLogs(filteredDiveLogs)
          setIsLoading(false);

        } else {
          navigate('/login')
        }
      } catch (error) {
        console.error('Error fetching dive logs:', error);
      }
    }
    getUserDiveLogs()
  }, [])


  const handleDeleteDiveLog = async (diveLogId) => {
    try {
      const response = await axios.delete(`/api/divelog/${diveLogId}/`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log('Dive log deleted:', response);
      // Reload page
      window.location.reload()

      const { data: updatedDiveLogs } = await axios.get('/api/divelog/', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      // Update the component state
      setDiveLogs(updatedDiveLogs);

      // filteredDiveLogs
      const updatedFilteredDiveLogs = updatedDiveLogs.filter(diveLog => diveLog.user?.id === loggedInUserId);
      setFilteredDiveLogs(updatedFilteredDiveLogs);

    } catch (error) {
      console.error('Error deleting review:', error);

      // Log the specific response received
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  }

  return (

    <div className="dive-log-allbg">
      <div className="dive-log-all">
        {getToken() ? (
          <div className="dive-log-each">
            {isLoading ? (
              <img src={loading} alt="Git Icon" className="loading" />
            ) : (
              <>
                {filteredDiveLogs && filteredDiveLogs.length > 0 ? (
                  <div className="dive-log-container">
                    {filteredDiveLogs
                      .sort((a, b) => new Date(b.date) - new Date(a.date))
                      .map((diveLog) => (
                        <div key={diveLog.id} className="dive-log-card">
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={diveLog.divespot.image} style={{ height: '220px' }} />
                            <Card.Body>
                              <div className="cardtitle">
                                <Card.Title style={{ fontWeight: 'bold' }}> {diveLog.date}</Card.Title>
                                <Card.Title style={{ color: '#345B63' }}>{diveLog.divespot.spotname}</Card.Title>
                                <Card.Text >- with {diveLog.partner}</Card.Text>
                                <Card.Text>{diveLog.note}</Card.Text>
                              </div>
                              <div className="cardinfo">
                                <Card.Text>TANKS:{diveLog.pickTanks}L</Card.Text>
                                <Card.Text>DEPTH:{diveLog.depth}m</Card.Text>
                                <Card.Text>TIME:{diveLog.divingtime}mins</Card.Text>
                                <Card.Text>TEMP:{diveLog.temperature}°C</Card.Text>
                                <Card.Text>VIS:{diveLog.visibility}m</Card.Text>
                                <Card.Text>SUIT:{diveLog.suit}</Card.Text>
                              </div>
                              <Button variant="primary" as={Link} to={`/divelog/${diveLog.id}/edit`} style={{ marginTop: '10px', backgroundColor: 'grey', borderColor: 'grey' }}>
                                Edit</Button>
                              <Button variant="primary" onClick={() => handleDeleteDiveLog(diveLog.id)} style={{ marginLeft: '5px', marginTop: '10px', backgroundColor: 'grey', borderColor: 'grey' }}>Delete
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="no-dive-logs">
                    <p>You have not created any dive logs yet!</p>
                    <Link to={'/divelog/create'} className='create-link'>Create My First Dive-Log !</Link>
                  </div>
                )}
              </>
            )}
          </div >
        ) : (
          <div>
            <p>Please log in to view your dive logs.</p>
            <Link to="/login" className="login-link">Log In</Link>
          </div>
        )
        }
      </div>
    </div>
  );

}