import { db } from "../db.js";
import { DataTypes } from "sequelize";
import { facultyRegistration } from "./registration.js";
export const facultyForm = db.define("faculty_forms", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  highestQualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateofjoining: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  phd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caste: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  married: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aadhar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  googleScholarlink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orcid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualification: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  rakedawardsprices: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  experiance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experiancedetails: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  teachingprocess: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  studentfeedback: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  results: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  Innovativeteachingmethodology: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  contentbeyondsyllabus: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  e_contentdeveloped: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  coursefiles: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  cirtificationcourcesbyfaculty: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  detailsoffacultydevelopmentprogram: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  additionalactivity: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  facultyexchange: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  publication_of_Journals: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  projectguidence: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  patents: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  funding: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  consultancy: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  feedbackfrompeers: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  facultyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
// facultyForm.sync({ alter: true });
// facultyForm.belongsTo(facultyRegistration, {
//   foreignKey: "facultyId",
//   targetKey: "id",
//   as: "faculty",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
