import React from 'react';
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
// import FriendList from '../components/FriendList';
import AssignmentList from '../components/AssignmentList';
import AssignmentForm from '../components/AssignmentForm';



import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ASSIGNMENTS, QUERY_ME_STUDENT } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ASSIGNMENTS);
  const { data: userData } = useQuery(QUERY_ME_STUDENT);
  const assignments = data?.assignments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <AssignmentForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AssignmentList
              assignments={assignments}
              title="Some Feed for Assignment(s)..."
            />)
          }
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
