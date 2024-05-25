import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ServerStatus() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    async function fetchServerStatus() {
      const response = await axios.get('https://api.mcsrvstat.us/2/YOUR_SERVER_IP');
      setServerData(response.data);
    }
    fetchServerStatus();
  }, []);

  if (!serverData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>伺服器狀態</h1>
      <p>伺服器地址: {serverData.hostname}</p>
      <p>狀態: {serverData.online ? '在線' : '離線'}</p>
      <p>玩家: {serverData.players.online}/{serverData.players.max}</p>
    </div>
  );
}

export default ServerStatus;
