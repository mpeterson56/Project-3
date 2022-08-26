import { gql } from '@apollo/client';

export const QUERY_STUDENT = gql`
query student($username: String!) {
    student(username: $username) {
        _id
        username
        email
        Assignment {
            _id
            username
            askPrice
            commentCount
            comments{
                _id
                username
                tutorname
                commentBody
            }
        }
    }
}
`;

export const QUERY_TUTOR = gql`
query tutor($tutorname: String!) {
    tutor(tutorname: $tutorname) {
        _id
        tutorname
        email
        Bids {
            _id
            tutorname
            priceOffer
            assignment
        }
    }
}
`;

export const QUERY_ME_STUDENT = gql`
    {
        me_Student {
            _id
            username
            email
            assignment {
                _id
                askPrice
                subject
                description
                createdAt
                username
                commentCount
                comments{
                    _id
                    username
                    tutorname
                    commentBody
                }
                bids {
                    _id
                    priceOffer
                    tutorname
                }
            }
        }
    }
`;

export const QUERY_ME_TUTOR = gql`
    {
        me_Tutor {
            _id
            tutorname
            email
            bids {
                _id
                priceOffer
                tutorname
                assignments
            }
        }
    }
`;

export const QUERY_ASSIGNMENTS = gql`
  query assignments($username: String!) {
    assignments(username: $username) {  
      _id
      description
      askPrice
      subject
      createdAt
      username
      bids {
        _id
        priceOffer
        tutorname
      }
      commentCount
      comments {
        _id
        username
        tutorname
        commentBody
      }
    }
  }
`;

export const QUERY_ASSIGNMENT = gql`
  query assignment($id: ID!) {
    assignment(_id: $id) {
      _id
      description
      username
      askPrice
      subject
    }
  }
`;