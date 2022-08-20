const { AuthenticationError } = require('apollo-server-express');
const { connect } = require('mongoose');
const { Student, Tutor, Assignment, Comment, Bids } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me_Student: async (parent, args, context) => {
          if (context.user) {
            const userData = await Student.findOne({ _id: context.user._id })
              .select('-__v -password')
            //   .populate('thoughts')
            //   .populate('friends');
    
            return userData;
          }
    
          throw new AuthenticationError('Not logged in');
        },

        // get all students
        students: async () => {
          return Student.find()
            .select('-__v -password')
            // .populate('thoughts')
            // .populate('friends');
        },

        // get a student by username
        student: async (parent, { username }) => {
          return Student.findOne({ username })
            .select('-__v -password')
            // .populate('friends')
            // .populate('thoughts');
        },
      
      },
    
};



module.exports = resolvers;