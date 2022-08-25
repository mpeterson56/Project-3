const { AuthenticationError } = require("apollo-server-express");
const { connect } = require("mongoose");
const {
  User,
  Comment,
  Student,
  Tutor,
  Assignment,
  Bids,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // student resolver queries
    me_Student: async (parent, args, context) => {
      if (context.student) {
        const studentData = await Student.findOne({ _id: context.student._id })
          .select("-__v -password")
          .populate("assignments");

        return studentData;
      }

      throw new AuthenticationError("Not logged in");
    },
    students: async () => {
      return Student.find().select("-__v -password").populate("assignments");
    },
    student: async (parent, { username }) => {
      return Student.findOne({ username })
        .select("-__v -password")
        .populate("assignments");
    },
    assignments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Assignment.find(params).sort({ createdAt: -1 });
    },
    assignment: async (parent, { _id }) => {
      return Assignment.findOne({ _id });
    },

    // tutor resolver queries
    me_Tutor: async (parent, args, context) => {
      if (context.tutor) {
        const tutorData = await Tutor.findOne({ _id: context.tutor._id })
          .select("-__v -password")
          .populate("bids");

        return tutorData;
      }

      throw new AuthenticationError("Not logged in");
    },
    tutors: async () => {
      return Tutor.find().select("-__v -password").populate("bids");
    },
    tutor: async (parent, { tutorname }) => {
      return tutor
        .findOne({ tutorname })
        .select("-__v -password")
        .populate("bids");
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
    // student mutations
    addStudent: async (parent, args) => {
      const student = await Student.create(args);
      const token = signToken(student);

      return { token, student };
    },

    loginStudent: async (parent, { email, password }) => {
      const student = await Student.findOne({ email });

      if (!student) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPW = await student.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(student);
      return { token, student };
    },

    addAssignment: async (parent, args, context) => {
      if (context.student) {
        const assignment = await Assignment.create({
          ...args,
          username: context.student.username,
        });

        await Student.findByIdAndUpdate(
          { _id: context.student._id },
          { $push: { assignments: assignment._id } },
          { new: true }
        );

        return assignment;
      }

      throw new AuthenticationError("You need to be logged in.");
    },

    // tutor mutations
    addTutor: async (parent, args) => {
      const tutor = await Tutor.create(args);
      const token = signToken(tutor);

      return { token, tutor };
    },

    loginTutor: async (parent, { email, password }) => {
      const tutor = await Tutor.findOne({ email });

      if (!tutor) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPW = await tutor.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(tutor);
      return { token, tutor };
    },

    addBid: async (parent, args, context) => {
      if (context.tutor) {
        const bid = await Bids.create({
          ...args,
          tutorname: context.tutor.tutorname,
        });

        await Tutor.findByIdAndUpdate(
          { _id: context.tutor._id },
          { $push: { bids: bid._id } },
          { new: true }
        );

        return bid;
      }

      throw new AuthenticationError("You need to be logged in.");
    },
  },
};

module.exports = resolvers;
