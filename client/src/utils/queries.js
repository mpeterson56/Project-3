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
        username
        email
        Bids {
            _id
            username
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
                    commentBody
                }
                bids {
                    _id
                    priceOffer
                    username
                }
            }
        }
    }
`;

export const QUERY_ME_TUTOR = gql`
    {
        me {
            _id
            username
            email
            bids {
                _id
                priceOffer
                username
                assignment
            }
        }
    }
`;