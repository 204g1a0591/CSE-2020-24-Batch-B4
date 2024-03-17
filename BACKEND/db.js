import { Sequelize } from "sequelize";
export const db = new Sequelize("faculty_apraisal", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});
