const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    student: Student @relation(name: "UserOnStudent")
    tutor: Tutor @relation(name: "UserOnTutor")
    userType: UserType
}

type Student {
    _id: ID
    user: User @relation(name: "UserOnStudent")
    username: String
    email: String
    assignments: [Assignment]
}

type Tutor {
    _id: ID
    user: User @relation(name: "UserOnTutor")
    username: String
    email: String
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
    students: [Student]
    tutors: [Tutor]

}

type Mutation {
    login(email: String!, password: String!): Auth
    addAssignment(assignmentText: String!): Assignment
    addComment(commentId: ID!, commentBody: String!): Assignment

}

`;
module.exports = typeDefs;