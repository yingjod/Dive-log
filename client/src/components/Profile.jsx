import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken, activeUser } from '../utilities/helpers/common'
import '../styles/main.scss';


export default function divelogAll() {
  const [diveLogs, setDiveLogs] = useState({});
  const [filteredDiveLogs, setFilteredDiveLogs] = useState([])
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
      const { data: updatedDiveLogs } = await axios.get('http://localhost:8000/api/divelog', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      // Update the component state
      setDiveLogs(updatedDiveLogs);

      // 更新 filteredDiveLogs
      const updatedFilteredDiveLogs = updatedDiveLogs.filter(diveLog => diveLog.user?.id === loggedInUserId);
      setFilteredDiveLogs(updatedFilteredDiveLogs);

      navigate('/profile', { replace: true });

    } catch (error) {
      console.error('Error deleting review:', error);

      // Log the specific response received
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  }


  return (
    <>
      <h1>Dive Logs</h1>
      {getToken() ? (
        <div>
          {filteredDiveLogs && filteredDiveLogs.length > 0 ? (
            <div className="dive-log-container">
              {filteredDiveLogs.map((diveLog) => (
                <div key={diveLog.id} className="dive-log-card">
                  <Link to={`/divelog/${diveLog.id}`} className="card-link">
                    <div className="card" style={{ width: '20rem' }}>
                      <div className="card-body">
                        <h5 className="text-center bold card-title">{diveLog.partner}</h5>
                        <p>{diveLog.note}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="dive-log-actions">
                    <Link to={`/divelog/${diveLog.id}`} className="edit-link">Edit Dive Log</Link>
                    <button className="delete-btn" onClick={() => handleDeleteDiveLog(diveLog.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-dive-logs">
              <p>You have not created any dive logs yet!</p>
              <Link to={'/divelog/create'} className='create-link'>Create Dive Log</Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>Please log in to view your dive logs.</p>
          <Link to="/login" className="login-link">Log In</Link>
        </div>
      )}
    </>

  )

}

