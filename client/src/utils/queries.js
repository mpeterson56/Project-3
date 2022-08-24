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
query tutor($username: String!) {
    tutor(username: $username) {
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
        me {
            _id
            username
            email
            assignment {
                _id
                askPrice
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
        me {
            _id
            tutorname
            email
            bids {
                _id
                priceOffer
                tutorname
                assignment
            }
        }
    }
`;

export const QUERY_ASSIGNMENTS = gql`
  query assignments($username: String) {
    assignments(username: $username) {
      _id
      askPrice
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
  query thought($id: ID!) {
    thought(_id: $id) {
      _id
      assignmentText
      username
    }
  }
`;