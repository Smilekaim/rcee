const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const TELEGRAM_BOT_TOKEN = process.env.7886439464:AAEBK3bhK0jXUeyZRBTPNdqVySVAnVNhH7k;
const TELEGRAM_CHAT_ID = process.env.909238194;

app.get('/', async (req, res) => {
  await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    params: {
      chat_id: TELEGRAM_CHAT_ID,
      text: `🚨 Someone visited your Render URL!`
    }
  });
  res.send('You triggered the notification!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
