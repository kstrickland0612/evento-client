const store = require('../store.js')
const trackerEvents = require('../tracker/events')

const fail = function (data) {
  $('.user-message').text('Something went wrong. Please try again.')
  $('form').trigger('reset')
}

const signUpSuccess = function (data) {
  $('.user-message').text('Sign up success!')
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const signInSuccess = function (data) {
  $('.user-message').text('')
  $('form').trigger('reset')
  store.user = data.user
  $('#sign-in').hide()
  $('h1').hide()
  $('.nav').show()
  $('.navbar').show()
  $('#sign-out').show()
  setTimeout(trackerEvents.newYear, 1000)
}

const changePwSuccess = function (data) {
  $('.changepw-message').text('Change password success!')
  $('form').trigger('reset')
}

const changePwFail = function (data) {
  $('.changepw-message').text('Change password failed, please try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('.user-message').text('Sign out success!')
  $('form').trigger('reset')
  store.user = null
  $('#sign-in').show()
  $('.my-account').hide()
  $('.nav').hide()
  $('.navbar').hide()
  $('.view-friends').hide()
  $('.view-friends-header').hide()
  $('.view-events').hide()
  $('.view-events-header').hide()
  $('#calendar').hide()
  $('.add-friend-form').hide()
  $('.add-event-form').hide()
  $('.event-notifications').hide()
  $('h1').show()
}

module.exports = {
  fail,
  signUpSuccess,
  signInSuccess,
  changePwSuccess,
  changePwFail,
  signOutSuccess
}
