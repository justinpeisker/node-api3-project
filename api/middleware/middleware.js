function logger(req, res, next) {
  const timeStamp = new Date().toLocaleString()
  console.log(`[${timeStamp}]`)
  next()
}

function validateUserId(req, res, next) {
  console.log('validateUserId middleware')
  next()
}

function validateUser(req, res, next) {
  console.log('validateUser middleware')
  next()
}

function validatePost(req, res, next) {
  console.log('validatePost middleware')
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  validateUserId,
  validateUser,
  validatePost,
  logger,

}