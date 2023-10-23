import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import {client} from "./utils/db.js";
import populationRouter from "./apps/population.js"


async function init () {
    const app = express();
    const port = 4000;

    await client.connect();

    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));

    app.use("/country",populationRouter);

    app.get("/", (req,res) => {
        res.send("Hello World",);
    });
    app.get("*", (req,res) => {
        res.status(404).send("Not Found");
    });

    app.listen(port, () => {
        console.log(`Server is running at port ${port}`)
    })
}

init()