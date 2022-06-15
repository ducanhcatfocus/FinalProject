const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const dotevn = require("dotenv");
const connectDatabase = require("./src/configs/db.config");
const authRouter = require("./src/routes/auth");
dotevn.config();

//connect DB

connectDatabase();

const app = express();
//middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static("publics"));

// app.use("/", apiRoute.default);

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
