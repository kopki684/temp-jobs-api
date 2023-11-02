const mongoose = require('mongoose');

async function connectDB(url) {
  await mongoose.connect(url)
    .then(() => {
      console.log('connect to db');
    });
}

module.exports = connectDB