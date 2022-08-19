const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    email: String
    username: String
    student: Student @relation(name: "UserOnStudent")
    tutor: Tutor @relation(name: "UserOnTutor")
    userType: UserType
}
type Student {
    _id: ID
    user: User @relation(name: "UserOnStudent")
    assignments: [Assignment]
}
type Tutor {
    _id: ID
    user: User @relation(name: "UserOnTutor")
    bids: [Bid]
}
enum UserType {
    Student, 
    Tutor
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
type Query {
    me: User
    users: [Student, Tutor]
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