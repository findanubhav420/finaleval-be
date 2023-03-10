const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(express.json());
app.use(cors());

const contentTypeRoutes = require('./src/routes/contentTypeRoutes');
const entriesRoutes = require('./src/routes/entriesRoute');
const fieldRoutes = require('./src/routes/fieldRoutes');

app.use('/contentTypes', contentTypeRoutes);
app.use('/entries', entriesRoutes);
app.use('/fields', fieldRoutes);

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});