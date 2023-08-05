import express, { Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { config } from "./config/config";
import { Err } from "./types/ErrorTypes";
import problem from './errorHandling/problem';
import campaignRouter from './routes/campaignsRouter';
import bidderRouter from './routes/bidderRouter';

const app = express();

// Implement CORS

app.use(cors({
  "origin": "*",
  "methods": "GET,POST",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

// Use logger on dev environment
if(config.server.env === 'dev'){
  app.use(logger('dev'));
}

// Body Parser, reading data from body into req.body
app.use(express.json());

/**
 * Routes
 */
app.get('/health', (req, res) => res.sendStatus(200));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

// Campaign configuration Routes
app.use('/campaigns', campaignRouter);
// Bidder Routes
app.use('/', bidderRouter);

// Error handling middleware
app.use((req, res, next) => next(problem(1002, req)));

app.use((err: Err, req: Request, res: Response, next: NextFunction) => {
  const { status, body } = err;
  res.setHeader('Content-Type', 'application/problem+json');
  res.status(status || 500);
  res.json(body);
});

const port = config.server.port;

// Start App
app.listen(port, () => {
  console.info(`listening on port ${port}`);
});
