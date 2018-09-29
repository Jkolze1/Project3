// Const's
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// userSchema
const userSchema = new Schema({

	username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false }

})

// Schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js NO PASSWORD PROVIDED')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})
// Add user info for two random users, Jay and Roy
// Link to source that helped with this https://www.sitepoint.com/local-authentication-using-passport-node-js/
// To bring up database copy and past use MyDatabase;

const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');
const User = mongoose.model('User', userSchema);

// Export
module.exports = User