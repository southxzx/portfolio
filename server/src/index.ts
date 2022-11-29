import express, { Request } from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import externalResponseFilter from "./middlewares/response.filter";
import { IResponse } from "./helpers/models/common";

import router from "./routes/index";

// Create Express server
const app = express();
const prod = process.env.NODE_ENV === "production";

// Middlewares
app.set("port", prod ? process.env.PORT : 6060);
app.use(cors());
app.use(express.json());

// Response interceptor - Initialization.
app.use("/api", router);
// app.use("/api", routerArticle);

app.use(externalResponseFilter);
dotenv.config();

// Connection to database
mongoose.connect(process.env.MONGO_URL || "").
  then(() => console.log("Successfully connected to MongoDB")).
  catch(err => console.log(err));


app.get("*", (err, req, res, next) => {
  console.log(err);
  res.status(500).send('error');
});


app.get('/', (req: Request, res: IResponse) => {
  res.end('<h1>Hello World!</h1><hr>');
});

// Listen to server
app.listen(app.get("port"), () => {
      console.info(`
    _/﹋\\_
    (҂\`_´)
    <,︻╦╤─ ҉ - - - - - *
    _/﹋\_
    `)
    console.info(`Server is listen on port ${app.get("port")} with mode ${process.env.NODE_ENV}`);
});