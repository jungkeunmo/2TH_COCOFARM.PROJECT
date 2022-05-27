const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const contactRouter = require("./routers/contactRouter");
const brandRouter = require("./routers/brandRouter");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/contact", contactRouter);
app.use("/api/brand", brandRouter);

app.listen(PORT, () => {
    console.log(`🍏http://localhost:${PORT} , NEXT.JS SERVER START🍏`);
});