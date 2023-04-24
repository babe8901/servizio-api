require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const servicesRouter = require("./routes/services");
const orderRouter = require("./routes/orders");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Servizio");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/orders", orderRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Database Connected...`);
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
