const { model, Schema } = require("mongoose");
const { encrytPassword, checkPassword } = require("../bcrypt");
const { generateToken } = require("../jwt");

const UserSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true, lowercase: true },
        password: { type: String, required: true, trim: true },
    },
    {
        timestamps: true,
    }
);

UserSchema.statics.AuthenticateUser = async (email, password) => {
    try {
        const user =  await User.findOne({ email });

        if(!user) {
            throw new Error("Invalid email, No user Exists");
        }

        const isMatch = await checkPassword(password, user.password);

        if(!isMatch) {
            throw new Error("Invalid Credentials/Password");
        }
        console.log("Login Successful.")
        return user;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

UserSchema.pre('save', async function (next) { // here we enter into function before exceuting function.
    const user = this;
    if(user.modifiedPaths().includes("password")) {
        user.password = await encrytPassword(user.password);
    }
    next(); // this will return function to save point
})


UserSchema.methods.generateUserToken = function() {
    const user = this;
    const token = generateToken({id: user._id});
    return token;
}



const User = model("User", UserSchema);
module.exports = User;
