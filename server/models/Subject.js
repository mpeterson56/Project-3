const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const subjectSchema = new Schema(

    {
        subjectName: {
            type: String,
            required: 'You need to choose a subject!',
            minlength: 1,
            maxlength: 50
          },

    },

    {
        toJSON: {
          virtuals: true
        }
      }
);

const Subject = model('Subject', subjectSchema);

module.exports = Subject;