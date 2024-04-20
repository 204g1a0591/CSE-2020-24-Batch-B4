import { facultyForm } from "../models/facultyform.js";
import { Router } from "express";
export const facultyFormRouter = Router();

facultyFormRouter.post("/", async (req, res) => {
  try {
    let body=req.body;
    body.qualification=JSON.stringify(body.qualification);
    body.experiancedetails=JSON.stringify(body.experiancedetails);
    body.teachingprocess=JSON.stringify(body.teachingprocess);
    body.studentfeedback=JSON.stringify(body.studentfeedback);
    body.results=JSON.stringify(body.results);
    body.Innovativeteachingmethodology=JSON.stringify(body.Innovativeteachingmethodology);
    body.contentbeyondsyllabus=JSON.stringify(body.contentbeyondsyllabus);
    body.e_contentdeveloped=JSON.stringify(body.e_contentdeveloped);
    body.coursefiles=JSON.stringify(body.coursefiles);
    body.cirtificationcourcesbyfaculty=JSON.stringify(body.cirtificationcourcesbyfaculty);
    body.detailsoffacultydevelopmentprogram=JSON.stringify(body.detailsoffacultydevelopmentprogram);
    body.additionalactivity=JSON.stringify(body.additionalactivity);
    body.facultyexchange=JSON.stringify(body.facultyexchange);
    body.publication_of_Journals=JSON.stringify(body.publication_of_Journals);
    body.projectguidence=JSON.stringify(body.projectguidence);
    body.patents=JSON.stringify(body.patents);
    body.funding=JSON.stringify(body.funding);
    body.consultancy=JSON.stringify(body.consultancy);

    const existingForm = await facultyForm.findOne({
      where: {
        facultyId: req.body.facultyId,
      },
    });
    if (existingForm) {
      res
        .status(400)
        .send({ msg: "form already submitted on that faculty id" });
    } else {
      await facultyForm.create(req.body);
      res.status(200).send({ msg: "form submitted successfully" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

facultyFormRouter.get("/", async (req, res) => {
  try {
    const forms = await facultyForm.findAll();
    res.status(200).send(forms);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

facultyFormRouter.get("/:id", async (req, res) => {
  try {
    const form = await facultyForm.findOne({
      where: {
        facultyId: req.params.id,
      },
    });
    res.status(200).send(form);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

facultyFormRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await facultyForm.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deleted) {
      res.status(200).send({ msg: "form deleted successfully" });
    } else {
      res.status(400).send({ msg: "error in deleting form" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
