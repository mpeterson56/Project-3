import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_ASSIGNMENT } from '../../utils/mutations'
import { QUERY_ASSIGNMENTS, QUERY_ME_STUDENT } from '../../utils/queries';

const AssignmentForm = () => {
  const [assignmentText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addAssignment, { error }] = useMutation(ADD_ASSIGNMENT, {
    update(cache, { data: { addAssignment } }) {
      
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME_STUDENT });
        cache.writeQuery({
          query: QUERY_ME_STUDENT,
          data: { me: { ...me, assignment: [...me.assignment, addAssignment] } },
        });
      } catch (e) {
        console.warn("First Assignment insertion by user!")
      }

      // update thought array's cache
      const { assignment } = cache.readQuery({ query: QUERY_ASSIGNMENTS });
      cache.writeQuery({
        query: QUERY_ASSIGNMENTS,
        data: { assignment: [addAssignment, ...assignment] },
      });
    }
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addAssignment({
        variables: { assignmentText },
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={` ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span>Something went wrong...</span>}
      </p>
      <form
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="New Assignments"
          value={assignmentText}
          onChange={handleChange}
        ></textarea>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AssignmentForm;
