import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
}
});


/*
  Hash Password before saving
*/
userSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    const user = this;
    bcrypt.hash(user.password, parseInt(process.env.SALT_ROUNDS),
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        user.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});


/*
  Checks if provided password matches in the database
*/
userSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

const User = mongoose.model('User', userSchema);

export default User;