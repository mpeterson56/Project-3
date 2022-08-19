const { AuthenticationError } = require('apollo-server-express');
const { connect } = require('mongoose');
const { Student, Tutor, Assignment, Bids } = require('../models');
const { signToken } = require('../utils/auth');

// const resolvers = {
//     Query: {
//         user: async(parent, args, context) => {
//             if (context.userType) {
//                 const studentData = await
//             }
//         }
//     }

    
// };



module.exports = resolvers;