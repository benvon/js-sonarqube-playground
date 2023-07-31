import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.post('/echo', (req, res) => {
  const userString = req.body.string;
  res.json({ echoedString: userString });
});

app.listen(3000, () => console.log('Echo server listening on port 3000!'));
