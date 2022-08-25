import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentList = ({ assignments, title }) => {
  if (!assignments.length) {
    return <h3>No assignments Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {assignments &&
        assignments.map(assignment => (
          <div key={assignment._id}>
            <p>
              <Link
                to={`/studentProfile/${assignment.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {assignment.username}
              </Link>{' '}
              assignment on {assignment.createdAt}
            </p>
            <div>
              <Link to={`/A/${assignment._id}`}>
                <p>{assignment.assignmentText}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AssignmentList;
