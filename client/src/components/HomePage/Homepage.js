import React from 'react';
import AssignmentList from '../AssignmentList/index';
import AssignmentForm from '../AssignmentForm/index';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ASSIGNMENTS } from '../../utils/queries';

const Homepage = () => {
  const { loading, data } = useQuery(QUERY_ASSIGNMENTS);
  const assignments = data?.assignments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            Testing
            {/* <AssignmentForm /> */}
          </div>
        )}
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AssignmentList
              assignments={assignments}
              title="Assignments"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Homepage;