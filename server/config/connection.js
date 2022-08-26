const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(
    process.env.MONGODB_URI || 'localhost:3000',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
      }
    );

    module.exports = mongoose.connection;