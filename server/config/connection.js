const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(
    process.env.MONGODB_URI || `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.onhazic.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
      }
    );

    module.exports = mongoose.connection;