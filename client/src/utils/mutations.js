import { gql } from '@apollo/client';

export const LOGIN_STUDENT = gql`
mutation loginStudent($email: String!, $password: String!) {
    loginStudent(email: $email, password: $password){
        token
        student {
            _id
            email
            username
        }
    }
}
`;

export const LOGIN_TUTOR = gql`
mutation loginTutor($email: String!, $password: String!) {
    loginTutor(email: $email, password: $password){
        token
        tutor {
            _id
            email
            tutorname
        }
    }
}
`;

export const ADD_STUDENT = gql`
mutation addStudent($username: String!, $password: String!, $email: String!) {
    addStudent(username: $username, password: $password, email: $email){
        student {
            _id
            username
            email
        }
        token
    }
}
`;

export const ADD_TUTOR = gql`
mutation addTutor($tutorname: String!, $password: String!, $email: String!) {
    addTutor(tutorname: $tutorname, password: $password, email: $email){
        tutor {
            _id
            tutorname
            email
        }
        token
    }
}
`;

export const ADD_ASSIGNMENT = gql`
mutation addAssignment($assignmentText: String!) {
    addAssignment(assignmentText: $assignmentText) {
      _id
      description
      askPrice
      username
      subject
    }
  }
`