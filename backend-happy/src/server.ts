import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

/** Typeorm Connection. */
import './database/connection';

/** Routes. */
import routes from './routes';

/** Error handler. */
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '', '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);