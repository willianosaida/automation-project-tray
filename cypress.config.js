const dotenv = require('dotenv');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      dotenv.config();
      return config;
    },
  },
};

