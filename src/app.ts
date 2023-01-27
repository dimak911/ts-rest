import express from "express";
import cors from "cors";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes";

const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  await connect();

  routes(app);
});
