// I denna filen läggs routes in, exempel:
// import tasksRouter from "./routes/tasks.js"
//app.use('/tasks', tasksRouter)
import express from "express";
import testRouter from "./routes/test.js";
const app = express(); 
app.use('/', testRouter);
app.use(express.json());

export default app;