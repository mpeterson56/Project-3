import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
        user {
            _id
        }
    }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!, $userType: String!) {
    addUser(username: $username, password: $password, email: $email, userType: $userType) {
        user {
            _id
            username
            email
            userType 
        }
        token
    }
}`;