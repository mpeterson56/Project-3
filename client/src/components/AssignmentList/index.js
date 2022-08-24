import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentList = ({ assignments, title }) => {
  if (!assignments.length) {
    return <h3>No Assignments Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {assignments &&
        assignments.map(assignment => (
          <div key={assignment._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${assignment.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {assignment.username}
              </Link>{' '}
              thought on {assignment.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${assignment._id}`}>
                <p>{assignment.thoughtText}</p>
                <p className="mb-0">
                  Reactions: {assignment.reactionCount} || Click to{' '}
                  {assignment.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AssignmentList;
