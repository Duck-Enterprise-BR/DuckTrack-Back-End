import "reflect-metadata";
import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app-container";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cron from 'node-cron';
import { TrackJob } from "./jobs/track-job/track.job";

export async function bootstrap() {
    dotenv.config();
    const MONGO_URL = process.env.MONGO_URL ?? "";
    const PORT: number = parseInt(process.env.PORT ?? "3000", 10);
    const app = AppInstance.create(container);
    app.listen(PORT, ServerEnvironment.Development);
    mongoose
        .connect(MONGO_URL, {
            dbName: process.env.DB_NAME ?? "",
        })
        .then(() => {
            console.log("Mongo connected");
        })
        .catch((err) => {
            console.error(err);
        });



    const trackJob = new TrackJob;
    trackJob.track();
    cron.schedule('* * * * *', () => {
        console.log('Cron job executado!');

    });

}

bootstrap();
