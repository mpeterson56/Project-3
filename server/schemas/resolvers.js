const { AuthenticationError } = require('apollo-server-express');
const { connect } = require('mongoose');
const { User, Comment, Student, Tutor, Assignment, Bids } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me_Student: async(parent, args, context) => {
            if (context.student) {
                const studentData = await Student.findOne({ _id: context.student._id })
                .select('-__v -password')
                .populate('assignments')

                return studentData;
            }

            throw new AuthenticationError('Not logged in');
        },
        students: async () => {
            return Student.find()
            .select('-__v -password')
            .populate('assignments')
        },
        student: async (parent, { username }) => {
            return Student.findOne({ username })
            .select('-__v -password')
            .populate('assignments')
        },
        assignments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Assignment.find(params).sort({ createdAt: -1 });
        },
        assignment: async (parent, { _id }) => {
            return Assignment.findOne({ _id });
        }
    }

    
};



module.exports = resolvers;