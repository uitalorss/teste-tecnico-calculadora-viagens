import "express-async-errors";
import express from 'express';
import cors from "cors";
import "reflect-metadata";
import { dataSource } from './shared/database/dataSource';
import { router } from './shared/infra/routes';
import "./shared/container/index"
import { handleErrors } from "./shared/infra/middlewares/handleErrors";

const app = express();


dataSource.initialize().then(() => {
    app.use(express.json());
    app.use(cors());
    app.use(router);
    app.use(handleErrors)
    app.listen(process.env.PORT, () => console.log("server is running on port 8080"));
})


