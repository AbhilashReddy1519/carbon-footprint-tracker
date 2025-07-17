const { connect } = require('mongoose');

const MONGODB_URL = "mongodb+srv://abhilash0505abhi:Abhi%402005@cluster0.jaioa7v.mongodb.net";

const DB_NAME = "carbon-footprint";

async function connectDB() {
    try {
        await connect(`${MONGODB_URL}/${DB_NAME}`);
        console.log("Database Connected..");
    } catch (err) {
        console.error(err);
    }
}

connectDB();