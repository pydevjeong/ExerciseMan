const Dotenv = require('dotenv-webpack')
const dotenv = require("dotenv");

dotenv.config()

module.exports = {
  plugins: [
    new Dotenv()
  ],
  
  resolve: {
    fallback: {
        "fs": false,
        "path": false ,
        "os": false
    }
  }
}