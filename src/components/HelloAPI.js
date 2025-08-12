// src/components/HelloAPI.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HelloAPI() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello/')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3 style={{ color: 'purple' }}>{message || 'Connecting to Django...'}</h3>
    </div>
  );
}

export default HelloAPI;