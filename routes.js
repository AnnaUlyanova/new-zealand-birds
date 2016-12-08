var path = require('path')

var birdAllData = require('./data')

module.exports = {
  getHome: getHome,
  getBirdById: getBirdById,
  postFeeback: postFeeback,
  getForm: getForm
}

function getHome (req, res) {
 //  var homeData = {
 //   title: 'Home page',
 //   welcomeInfo: "Welcome!"
 // }
 // res.render('home', homeData)
 var birdInfo = {
 title: 'Home page',
 birdAllData: birdAllData
}
res.render('home', birdInfo)
}


function getBirdById (req, res) {
    var birdInfo = {
    title: 'Bird page',
    currentBird: birdAllData[req.params.id-1]
  }
  res.render('bird', birdInfo)
}

function getForm (req, res){
  var data = {
    title: "FeedbackForm"
  }
  res.render ('form', data)
}

function postFeeback (req, res) {
    var data = req.body
  res.render('form', data)
}

// function getBirdById (req, res) {
//     var birdInfo = {
//     title: 'Bird page',
//     birdAllData: birdAllData
//   }
//   res.render('bird', birdInfo)
// }
