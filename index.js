import express from 'express';
import bodyParser from 'body-parser'; //middleware this allows us to take in incoming post request bodies
import usersRouters from './routers/user.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/users', usersRouters);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`),
);
