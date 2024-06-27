const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const route = require('./routes');
const router = express();

const URL = `mongodb+srv://devarshcs2025:aFOouP0J1crzrW21@cluster0.cudx3h1.mongodb.net/`;

const StartServer = async () => {
    router.use((req, res, next) => {
        console.log(
            `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
        );
        res.on('finish', () => {
            console.log(
                `Finished -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
            );
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        if (req.method === 'OPTIONS') {
            res.header(
                'Access-Control-Allow-Methods',
                'PUT, POST, PATCH, DELETE, GET'
            );
            return res.status(200).json({});
        }
        next();
    });

    // API ROUTES WITH VERSION
    router.use('/api', route);

    // API HEALTHCHECK
    router.get('/ping', (req, res) =>
        res.status(200).json({ message: 'pong' })
    );

    // API MAIN ROUTER "/"
    router.get('/', (_, res) => {
        res.status(200).json({
            success: true,
            message:
                'You are on node-typescript-boilerplate. You should not have further access from here.',
        });
    });

    // API ERROR HANDLING
    router.use((req, res, next) => {
        const error = new Error('not found');
        console.log(error);
        return res.status(404).json({ success: false, message: error.message });
    });

    // HANDLE ALL ERRORS THROWN BY CONTROLLERS
    router.use((err, req, res, next) => {
        console.log(err.stack);

        if (err instanceof HttpError) {
            return err.sendError(res);
        } else {
            return res.status(500).json({
                error: {
                    title: 'general_error',
                    detail: 'An error occurred, Please retry again later',
                    code: 500,
                },
            });
        }
    });

    // YOUR SERVER LISTEN
    http.createServer(router).listen(3080, () =>
        console.log(`Server is running on port 3080.`)
    );
};

mongoose
    .connect(URL, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Running');
        console.log('Connected to mongoDB.');
        StartServer();
    })
    .catch((error) => {
        console.log('Unable to connect.');
        console.log(error);
    });
