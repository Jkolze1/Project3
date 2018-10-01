const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express();


// Port
const PORT = 3000;

// Route requires
const user = require('./routes/user')

// Middleware
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, 
		saveUninitialized: false 
	})
)
// Sign up
app.use( (req, res, next) => {
	console.log('req.session', req.session);
	next()
  });
  app.post('/user', (req, res) => {
	console.log('user signup');
	req.session.username = req.body.username;
	res.end()
  })

  
// Passport
app.use(passport.initialize())
app.use(passport.session()) 

// Vars
var yelp = require('./routes/yelp');

// Routes
app.use('/user', user);
app.use('/yelp', yelp);

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
