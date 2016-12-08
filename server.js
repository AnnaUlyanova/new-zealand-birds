var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var routes = require('./routes')

var server = express()

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))


// Routes

server.get('/', routes.getHome) //Home page
//server.get('/bird', routes.getBirdById) //Test bird
server.get('/bird/:id', routes.getBirdById) //Load page for selected bird
server.get('/form', routes.getForm)
server.post('/form', routes.postFeeback)

module.exports = server
