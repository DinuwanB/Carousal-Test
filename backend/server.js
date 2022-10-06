const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dbConnect = require("./services/db");
const api = require("./routes/index.api");

require("dotenv").config();
const PORT = 3006;
const DB_URI = process.env.URI;

//Databse connect function
dbConnect(DB_URI);

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/image", express.static("uploads"));
app.use(morgan("combined"));
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}, `);
});
