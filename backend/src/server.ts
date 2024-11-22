import express from 'express';
import cors from "cors";
import { dataSource } from './shared/database/dataSource';
import "reflect-metadata";

const app = express();


dataSource.initialize().then(() => {
    app.use(express.json());
    app.use(cors());
    app.listen(process.env.PORT, () => console.log("server is running on port 8080"));
})


