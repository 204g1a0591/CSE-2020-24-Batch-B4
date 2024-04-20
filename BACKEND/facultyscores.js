import { db } from "../db.js";
import { DataTypes } from "sequelize";

export const facultyScores = db.define("faculty_scores", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teachingProcess: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  studentFeedback: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  results: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  innovativeTeachingmethodology: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  contentbeyondthesyllabus: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  e_contentdeveloped: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  coursefiles: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  certificationCourses: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  detailsofFacultyDevelopmentProgram: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  additionalActivity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  facultyExchange: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  publicationofJournals: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  projectGuidence: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  patents: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  funding: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  consultancy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  feedback: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  total1: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  total2: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  tatal3: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  facultyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
// facultyScores.sync({ alter: true });
