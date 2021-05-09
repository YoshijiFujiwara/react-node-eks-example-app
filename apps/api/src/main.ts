import * as express from 'express';
import { Message } from '@react-node-eks-example-app/api-interfaces';
import * as cors from 'cors';

const app = express();
app.use(cors());

const greeting: Message = { message: 'Welcome to api!デプロイチェックメッセージ！' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

console.log('process.env.NX_API_PORT', process.env.NX_API_PORT);
const port = process.env.NX_API_PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
