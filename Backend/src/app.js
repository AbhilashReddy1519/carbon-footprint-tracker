require("./appMongoose");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user-routes");
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use("/user", userRouter);

require("dotenv").config();
const port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
