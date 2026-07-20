import express from 'express';
import env from './config/env.js';
import logger from './config/logger.js';

const app = express();

app.get('/health', (req,res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Server is running',
        timestamp: new Date().toISOString(),
    })
})

app.listen(env.PORT , () => {
    logger.info({ port: env.PORT }, 'Server started');
})