if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

  let PORT = 3003
  let MONGODB_URI = process.env.MONGODB_URI

  module.exports = {
    MONGODB_URI,
    PORT
  }