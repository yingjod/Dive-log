import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken, activeUser } from '../utilities/helpers/common'
import '../styles/main.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import loading from '../images/Loading.gif'



export default function divelogAll() {
  const [diveLogs, setDiveLogs] = useState({});
  const [filteredDiveLogs, setFilteredDiveLogs] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const loggedInUserId = activeUser()


  useEffect(() => {
    async function getUserDiveLogs() {
      try {
        if (getToken()) {
          const { data: diveLogs } = await axios.get(`http://localhost:8000/api/divelog`, {
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
      const response = await axios.delete(`http://localhost:8000/api/divelog/${diveLogId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log('Dive log deleted:', response);

      window.location.reload();
      const { data: updatedDiveLogs } = await axios.get('http://localhost:8000/api/divelog', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      // Update the component state
      setDiveLogs(updatedDiveLogs);

      // filteredDiveLogs
      const updatedFilteredDiveLogs = updatedDiveLogs.filter(diveLog => diveLog.user?.id === loggedInUserId);
      setFilteredDiveLogs(updatedFilteredDiveLogs);

      // navigate('/profile', { replace: true });

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

            {isLoading ? ( // 判斷是否還在載入資料
              // <p className="loading">Loading...</p>
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
                            <Card.Img variant="top" src={diveLog.divespot.image} />
                            <Card.Body>
                              <Card.Title>Date:{diveLog.date}</Card.Title>
                              <Card.Text>{diveLog.note}</Card.Text>
                              <Button variant="primary" as={Link} to={`/divelog/${diveLog.id}/edit`} >Edit</Button>
                              <Button variant="primary" onClick={() => handleDeleteDiveLog(diveLog.id)} style={{ marginLeft: '5px' }}>Delete</Button>
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