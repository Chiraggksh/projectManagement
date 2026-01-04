import dotenv from "dotenv";

dotenv.config();

console.log("Startinggg the backend series.....");

let name = process.env.NAME;
console.log(name);

let pass = process.env.DATABASE_PASSWORD;
console.log(pass);
