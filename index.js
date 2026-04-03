import express from "express";
import itemRoutes from "./routes/itemRoutes.js"
import errorMiddleware from "./middlewares/errorMiddlware.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

if (process.env.NODE_ENV !== "test") {
  connectDB();
}
export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "vraj"
  })
})

app.use("/items", itemRoutes);

app.use(errorMiddleware);

if (process.env.NODE_ENV !== "test") {
  app.listen("3000", () => {
    console.log("App listing is 3000 port");
  });
}
