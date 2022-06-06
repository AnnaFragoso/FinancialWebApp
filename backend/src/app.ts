import express from "express";
import { router } from "./routes";
import cors from "cors";
import dotenv from 'dotenv'
import { connectionSource } from "./dataSource";
dotenv.config();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();

    connectionSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
  }

  private middleware(){
    this.server.use(express.json());
    this.server.use(cors(corsOptions))
  }

  private router(){
    this.server.use(router);
  }
}

export default App;