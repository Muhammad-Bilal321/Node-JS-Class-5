require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const courseRoute = require("./routes/courseroute");
// const userRoute = require("./routes/userroute");
const authRoute = require("./routes/authRouter")
const App = express();
App.use(express.json());

App.use("/course", courseRoute);
// App.use("/login", authRoute);
// App.use("/signup", authRoute);
App.use("/auth", authRoute)
// App.use("/user", userRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(
        `Database Connected and server is listening http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
