const { AuthenticationError } = require('apollo-server-express');
const { connect } = require('mongoose');
const { User, Comment, Student, Tutor, Assignment, Bids } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // student resolver queries
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
        },

        // tutor resolver queries
        me_Tutor: async(parent, args, context) => {
            if (context.tutor) {
                const tutorData = await Tutor.findOne({ _id: context.tutor._id })
                .select('-__v -password')
                .populate('bids')

                return tutorData;
            }

            throw new AuthenticationError('Not logged in');
        },
        tutors: async () => {
            return Tutor.find()
            .select('-__v -password')
            .populate('bids')
        },
        tutor: async (parent, { tutorname }) => {
            return tutor.findOne({ tutorname })
            .select('-__v -password')
            .populate('bids')
        },
        bids: async (parent, { tutorname }) => {
            const params = tutorname ? { tutorname } : {};
            return Bids.find(params).sort({ createdAt: -1 });
        },
        bid: async (parent, { _id }) => {
            return Bids.findOne({ _id });
        },

    },

    Mutation: {
        addStudent: async (parent, args) => {
            const student = await Student.create(args)
            const token = signToken(student);

            return { token, student };
        },

        addTutor: async (parent, args) => {
            const tutor = await Tutor.create(args)
            const token = signToken(tutor);

            return { token, student };
        },

        // login: async (parent, { email, password }) => {
        //     const student = await Student.findOne({ emial });

        //     if (!student) {
        //         throw new AuthenticationError('Incorrect credentials');
        //     }

        //     const correctPW = await student.isCorrectPassword(password);

        //     if(!correctPW) {
        //         throw new AuthenticationError('Incorrect credentials');
        //     }

        //     const token = signToken(student);
        //     return { token, user };
        // },

        addAssignment: async (parent, args, context) => {
            if (context.user) {
                const assignment = await Assignment.create({ ...args, username: context.student.username });

                await Student.findByIdAndUpdate(
                    { _id: context.student._id },
                    { $push: { assignments: assignment._id } },
                    { new: true }
                );

                return assignment;
            }

            throw new AuthenticationError('You need to be logged in.');
        },

        addBid: async (parent, args, context) => {
            if (context.tutor) {
                const bid = await Bids.create({ ...args, username: context.tutor.tutorname });

                await Tutor.findByIdAndUpdate(
                    { _id: context.tutor._id },
                    { $push: { bids.tutor._id }}
                )
            }
        }

    }

    
};



module.exports = resolvers;