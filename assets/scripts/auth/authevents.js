const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFail)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.fail)
}

const onNeedToSignUp = function (event) {
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onNeedToSignIn = function (event) {
  $('#sign-in').hide()
  $('#sign-up').show()
}

const clearUserMessages = function (event) {
  $('.user-message').text('')
  $('.changepw-message').text('')
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp).hide()
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#calendar').hide()
  $('.my-account').hide()
  $('.navbar').hide()
  $('.view-events-header').hide()
  $('.view-friends-header').hide()
  $('.add-friend-form').hide()
  $('.add-event-form').hide()
  $('.sign-in-link').on('click', onNeedToSignUp)
  $('.sign-up-link').on('click', onNeedToSignIn)
  $('.change-password-button').on('click', clearUserMessages)
}

module.exports = {
  addHandlers
}
