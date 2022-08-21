const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://mpeterson56:Champion00@cluster0.onhazic.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
      }
    );

    module.exports = mongoose.connection;