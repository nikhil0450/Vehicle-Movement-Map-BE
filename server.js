const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

const routeData = [
  { latitude: 18.516726, longitude: 73.856255 },
  { latitude: 18.748060, longitude: 73.407219 }
];

app.get('/api/vehicle-route', (req, res) => {
  res.json(routeData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
