import express from "express";
import config from "config";
import boysRouter from "./controllers/boys/index.js";
import foodRouter from "./controllers/food/index.js";
import userRouter from "./controllers/users/index.js";

const app = express();

const PORT = config.get("PORT");

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Hello, World!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.use("/foodapi", foodRouter);
app.use("/boysapi", boysRouter);
app.use("/usersapi", userRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
