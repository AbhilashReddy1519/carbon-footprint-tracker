const { connect } = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.MONGODB_DB_NAME;

async function connectDB() {
    try {
        await connect(`${MONGODB_URL}/${DB_NAME}`);
        console.log("Database Connected..");
    } catch (err) {
        console.error(err);
    }
}

connectDB();
