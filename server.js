const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const TELEGRAM_BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.CHAT_ID;

app.get('/', async (req, res) => {
  // Extract IP from headers (works behind proxies/load balancers like Render)
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const message = `🚨 Someone visited your URL\n🕵️ IP: ${ip}`;

  try {
    await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      params: {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      }
    });
    res.send('Notification sent with IP!');
  } catch (err) {
    console.error('Telegram Error:', err.message);
    res.status(500).send('Failed to notify');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
