import { facultyRegistration } from "../models/registration.js";
import { Router } from "express";
export const registrationRouter = Router();
registrationRouter.post("/", async (req, res) => {
  try {
    const exisitingFaculty = await facultyRegistration.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exisitingFaculty) {
      res.status(200).send({ msg: "email already exists" });
    } else {
      await facultyRegistration.create(req.body);
      res.status(200).send({ msg: "faculty registered successfully" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

registrationRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existinguser = await facultyRegistration.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (existinguser) {
      res.status(200).send(existinguser);
    } else {
      res.status(400).send({ msg: "invalid credentials" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

registrationRouter.get("/", async (req, res) => {
  try {
    const faculty = await facultyRegistration.findAll();
    res.status(200).send(faculty);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});