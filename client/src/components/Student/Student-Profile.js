import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_STUDENT, QUERY_ME_STUDENT } from '../../utils/queries';
import Auth from '../../utils/auth';
import AssignmentForm from '../AssignmentForm/index'
import AssignmentList from '../AssignmentList';

const StudentProfile = (props) => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_STUDENT : QUERY_ME_STUDENT, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};

    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/studentProfile:username" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    return (
        <div>
            <div>
                <h2>
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
            </div>

            <div>
                <div>
                    <AssignmentList
                    Assignments={user.Assignments}
                    title={`${user.username}'s Assignments...`}
                    />
                </div>
            </div>
            
             <div>{!userParam && <AssignmentForm />}</div>
        </div>
    );
};

export default StudentProfile;