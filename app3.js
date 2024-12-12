import express from "express";
import config from "config";

const app = express();

const PORT = config.get("PORT") || 6000;
const password = config.get("PWD");
console.log(PORT);
console.log(password);
