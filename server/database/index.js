// Connect to Mongo DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise

//27017 is the default mongoDB port
const uri = 'mongodb://fitnessfinder:fitnessfinder123@ds119853.mlab.com:19853/heroku_lc6r3nsr'
// Should look like this mongodb://trekitout:trekitout@ds129422.mlab.com:29422/heroku_b2rft21n'
mongoose.connect('mongodb://fitnessfinder:fitnessfinder123@ds119853.mlab.com:19853/heroku_lc6r3nsr');
mongoose.Promise = Promise;
var db = mongoose.connection;
mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );

// Export
module.exports = mongoose.connection

// Added cause idk
