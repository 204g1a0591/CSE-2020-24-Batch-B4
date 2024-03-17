import { db } from "./db.js";
import express from "express";
import cors from "cors";
import { registrationRouter } from "./controllers/facultyregistration.js";
import { facultyFormRouter } from "./controllers/facultyform.js";
import { facultyScoresRouter } from "./controllers/facultyscores.js";
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
try {
  await db.authenticate();
//  await db.sync({alter:true})
  console.log("database connected successfully");
  app.listen(port, () => {
    console.log("server running on port :" + port);
  });
} catch (error) {
  console.log(error);
}

app.get("/api", async (req, res) => {
  try {
    res.status(200).send("welcome!");
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/register", registrationRouter);
app.use("/api/form", facultyFormRouter);
app.use("/api/scores", facultyScoresRouter);
