import { db } from "../db.js";
import { DataTypes } from "sequelize";

export const facultyRegistration = db.define("faculty_registration", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// facultyRegistration.sync({ alter: true });
