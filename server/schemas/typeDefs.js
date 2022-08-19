const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Student {
    _id: ID
    username: String
    email: String
    assignment: [Assignment]
}

type Tutor {
    _id: ID
    username: String
    email: String
    bids: [Bid]
}

type Assignment {
    _id: ID
    description: String
    askPrice: Int32Array
    createdAt: String
    username: String
    bids: [Bid]
    subject: String
    commentCount: Int
    comments: [Comment]
}

type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
}

type Bid {
    _id: ID
    priceOffer: String
    username: String
    createdAt: String
    assignment: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    students: [Student]
    tutors: [Tutor]
    comments(username: String!): [Comment]
    comment(_id: ID!): Comment
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAssignment(assignmentText: String!): Assignment
    addComment(commentId: ID!, commentBody: String!): Assignment
    addBid(bidId: ID!, bidBody: Int!): Bid
}
`;
module.exports = typeDefs;