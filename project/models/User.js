const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
    mobile: { type: String }, 
    dob: { type: Date, required: true }, 
    favorite_sports: { type: String, required: true }, 
    gender: { type: String, enum: ['male', 'female'], required: true }, 
    country: { type: String, required: true }, 
  }, { timestamps: true }
); 

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.comparePassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
