import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const port = process.env.PORT || 6000;
const name = process.env.NAMES;
console.log(port);
console.log(name);
