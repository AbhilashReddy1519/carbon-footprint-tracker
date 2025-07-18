const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    name: {type: String, required: true, trim: true},
    
})