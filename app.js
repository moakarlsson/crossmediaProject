// I denna filen läggs routes in, exempel:
// import tasksRouter from "./routes/tasks.js"
//app.use('/tasks', tasksRouter)
import express from "express";
const app = express(); 

app.use(express.json());

export default app;