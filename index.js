import express from "express";
import itemRoutes from "./routes/itemRoutes.js";

export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name : "vraj"
  })
})

app.use("/items", itemRoutes);


if (process.env.NODE_ENV !== "test") {
  app.listen("3000", () => {
    console.log("App listing is 3000 port");
  });
}
