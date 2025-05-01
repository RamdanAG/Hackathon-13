import React, { useState } from 'react';
import './index.scss'; // pastikan file ini ada dan digunakan

const App = () => {
  const [flightStatus, setFlightStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckFlight = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/getStatus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flightNumber: 'GA123' }),
      });

      const data = await response.json();
      setFlightStatus(data);
    } catch (err) {
      setFlightStatus({ error: 'Gagal fetch data flight!' });
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>check</h1>
      <button onClick={handleCheckFlight} className="check-btn">
        {loading ? 'Checking...' : 'Check Flight Status'}
      </button>

      {flightStatus && (
        <div className="status-box">
          {flightStatus.error ? (
            <p className="error">{flightStatus.error}</p>
          ) : (
            <>
              <p><strong>Flight:</strong> {flightStatus.flightNumber}</p>
              <p><strong>Status:</strong> {flightStatus.status}</p>
              <p><strong>Delay:</strong> {flightStatus.delayMinutes} minutes</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
