const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    email: String
    username: String
    userType: [Student, Tutor]
}

<<<<<<< HEAD
type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
=======
type Student {
    _id: ID
    userType: Student
    assignments: [Assignment]
}

type Tutor {
    _id: ID
    userType: Tutor
    bids: [Bid]
}

type Assignment {
    _id: ID
    assignmentText: String
    createdAt: String
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
    bidAmount: Int
    username: String
    createdAtL: String
}
>>>>>>> 0e12cf3efde43e392d7a03151def205b82a725f2

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