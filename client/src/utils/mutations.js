import { gql } from '@apollo/client';

export const LOGIN_STUDENT = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
        student {
            _id
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
            username
        }
    }
}
`;

export const ADD_STUDENT = gql`
mutation addStudent($username: String!, $password: String!, $email: String!) {
    addStudent(username: $username, password: $password, email: $email){
        token
        student {
            _id
            username
        }  
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
mutation addAssignment($description: String!, $askPrice: String!) {
    addAssignment(description: $description, askPrice: $askPrice) {
      _id
      description
      askPrice
      username
    }
  }
`