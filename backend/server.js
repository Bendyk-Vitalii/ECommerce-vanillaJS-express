import express from "express";
import cors from "cors";
import { products } from "./data.js";
//const express = require('express');
//const cors = require('cors');
const app = express();
console.log(cors);
app.use(cors())



const PORT = 5000;


app.get('/products', (req, res) => {
    res.send(products);
});
 
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
