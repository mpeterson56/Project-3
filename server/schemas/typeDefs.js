const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Student {
    _id: ID
    username: String
    email: String
    assignments: [Assignment]
}

type Tutor {
    _id: ID
    username: String
    email: String
    bids: [Bid]
}

type Assignment {
    _id: ID
    assignmentText: String
    createdAt: String
    coomentCount: Int
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
    bidAmount: Int
    username: String
    createdAtL: String
}

type Query {

}

type Mutation {
    login(email: String!, password: String!): Auth
    addAssignment(assignmentText: String!): Assignment
    addComment(commentId: ID!, commentBody: String!): Assignment
    
}

`;
module.exports = typeDefs;