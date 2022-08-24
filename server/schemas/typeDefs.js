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
    tutorname: String
    email: String
    bids: [Bids]
}

type Assignment {
    _id: ID
    description: String
    askPrice: String
    createdAt: String
    username: String
    bids: [Bids]
    subject: String
    commentCount: String
    comments: [Comment]
}

type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
    tutorname: String
}

type Bids {
    _id: ID
    priceOffer: String
    tutorname: String
    createdAt: String
    assignments: String
}

type Auth {
    token: ID!
    student: Student
    tutor: Tutor
}


type Query {
    me_Student: Student
    me_Tutor: Tutor 
    students: [Student]
    tutors: [Tutor]
    student(username: String!): Student
    tutor(tutorname: String!): Tutor
    assignments(username: String!): [Assignment]
    assignment(_id: ID!): Assignment
    bids(tutorname: String!): [Bids]
    bid(_id: ID!): Bids
    comments( tutorname: String!): [Comment]
    comment(_id: ID!): Comment
}



type Mutation {
    login(email: String!, password: String!): Auth
    addStudent(username: String!, email: String!, password: String!): Auth
    addTutor(tutorname: String!, email: String!, password: String!): Auth
    addAssignment(assignmentText: String!): Assignment
    addComment(commentId: ID!, commentBody: String!): Assignment
    addBid(bidId: ID!, bidBody: String!): Bids
}
`;
module.exports = typeDefs;