import express, { Request, Response, Express } from "express";
import {PrismaClient} from "@prisma/client";
import {UnauthorizedException} from "./errors/exeptions/unauthorized.exception";
import LocalidadesController from "./controllers/localidades.controller";
import {NotFoundException} from "./errors/exeptions/not-found.exception";

const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");


let logger = require('morgan');
export const  prisma = new PrismaClient();
const app: Express = express();
const port: number = 3000;

async function main(): Promise<void> {
    app.use(compression()); // Compress all routes
    app.use(helmet());
    app.use(logger('dev'));
    const limiter = RateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 20,
    });
// Apply rate limiter to all requests
    app.use(limiter);
    //
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, API-Key')
        next()
    })
    app.use((req, res, next) => {
        const apiKey = req.get('ApiKey')
        if (!apiKey || apiKey !== process.env.ApiKey) {
            res.status(401).json(new UnauthorizedException("Your API key is invalid"))
        } else {
            next()
        }
    })

    app.use(express.json());
    app.use("/api/v1", LocalidadesController)

    app.all("*", (req: Request, res: Response) => {
        res.status(404).json(new NotFoundException("Route not found"));
    });
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

main()
    .then(async () => {
        await prisma.$connect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });


