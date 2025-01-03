const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const serverInfo = {
  players: "60/64",
  ping: "104ms",
  tickrate: "60 Hz",
  settings: {
    region: "Europe - DE",
    punkBuster: "ON",
    fairFight: "ON",
    password: "OFF",
    preset: "NORMAL",
  },
  advanced: {
    minimap: "ON",
    "only Squad Leader Spawn": "OFF",
    vehicles: "ON",
    "team Balance": "ON",
    "minimap Spotting": "ON",
    hud: "ON",
    "3p Vehicle Cam": "ON",
    "regenerative Health": "ON",
    "kill Cam": "ON",
    "friendly Fire": "OFF",
    "3d Spotting": "ON",
    "enemy Name Tags": "ON",
  },
  rules: {
    tickets: 400,
    "vehicle Spawn Delay": 25,
    "bullet Damage": 100,
    "kick After Team Kills": 5,
    "player Health": 100,
    "player Respawn Time": 100,
    "kick After Idle": 300,
    "ban After Kicks": 3,
  },
};

app.get('/api/server-info', (req, res) => {
  res.json(serverInfo);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
