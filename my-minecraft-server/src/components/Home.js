import React from 'react';

function Home() {
  return (
    <div>
      <h1>歡迎來到 Minecraft 伺服器網站</h1>
      <nav>
        <ul>
          <li><a href="/server-status">伺服器狀態</a></li>
          <li><a href="/discord-login">Discord 登錄</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
