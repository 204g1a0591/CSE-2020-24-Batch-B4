import { facultyScores } from "../models/facultyscores.js";
import { Router } from "express";

export const facultyScoresRouter = Router();

facultyScoresRouter.post("/", async (req, res) => {
  try {
    const existingScores = await facultyScores.findOne({
      where: {
        facultyId: req.body.facultyId,
      },
    });
    if (existingScores) {
      res.status(400).send({ msg: "scores already exists on that faculty id" });
    } else {
      await facultyScores.create(req.body);
      res.status(200).send({ msg: "faculty scores created" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

facultyScoresRouter.get("/:id", async (req, res) => {
  try {
    const scores = await facultyScores.findOne({
      where: {
        facultyId: req.params.id,
      },
    });
    res.status(200).send(scores);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

facultyScoresRouter.patch("/:id", async (req, res) => {
  try {
    await facultyScores.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send({msg:"updated successfully"})
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
