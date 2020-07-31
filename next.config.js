// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}