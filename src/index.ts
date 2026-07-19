import express from 'express';
import env from './config/env.js';

const app = express();

app.get('/health', (req,res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Server is running',
        timestamp: new Date().toISOString(),
    })
})

app.listen(env.PORT , () => {
    console.log(`Server is running on port ${env.PORT}`);
})