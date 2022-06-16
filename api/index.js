const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const dotevn = require("dotenv");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const connectDatabase = require("./src/configs/db.config");
const authRouter = require("./src/routes/auth");
dotevn.config();

//connect DB

connectDatabase();

const app = express();
//middleware

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, please try again in an hour!",
});
app.use("/api", limiter);

app.use(cors());
app.use(express.json({ limit: "10kb" }));

//Data sanitization again NoSQL query injection
app.use(mongoSanitize());

//Data sanitization again XSS
app.use(xss());

app.use(express.static("publics"));

// app.use("/", apiRoute.default);

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
