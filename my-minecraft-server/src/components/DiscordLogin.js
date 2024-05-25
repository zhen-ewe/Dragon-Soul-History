import React from 'react';

function DiscordLogin() {
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify`;

  return (
    <div>
      <h1>Discord 登錄</h1>
      <a href={discordAuthUrl}>使用 Discord 登錄</a>
    </div>
  );
}

export default DiscordLogin;
