import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use(bodyParser.json());
    this.server.use(cookieParser());
  }
  routes() {
    this.server.use(routes);
    this.server.use(cors);
  }
}

export default new App().server;
