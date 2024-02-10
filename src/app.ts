import express from 'express';
import routes from './routes/todos';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(routes);
app.listen(3000);