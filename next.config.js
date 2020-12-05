const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },

  env: {
    fullUrl: process.env.HOST,
  },
}