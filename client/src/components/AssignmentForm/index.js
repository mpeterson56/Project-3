import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_ASSIGNMENT } from "../../utils/mutations";
import { QUERY_ASSIGNMENTS, QUERY_ME_STUDENT } from "../../utils/queries";

const AssignmentForm = () => {
  const [description, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addAssignment, { error }] = useMutation(ADD_ASSIGNMENT, {
    update(cache, { data: { addAssignment } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me_Student } = cache.readQuery({ query: QUERY_ME_STUDENT });
        cache.writeQuery({
          query: QUERY_ME_STUDENT,
          data: {
            me_Student: {
              ...me_Student,
              assignment: [...me_Student.assignment, addAssignment],
            },
          },
        });
      } catch (e) {
        console.warn("First Assignment insertion by user!");
      }

      // update thought array's cache
      const { assignment } = cache.readQuery({ query: QUERY_ASSIGNMENTS });
      cache.writeQuery({
        query: QUERY_ASSIGNMENTS,
        data: { assignment: [addAssignment, ...assignment] },
      });
    },
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
        variables: { description },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div class="row">
      
      <form class="col s12 indigo darken white-text" onSubmit={handleFormSubmit}>
      
        <div class="input-field col s9">
        
          <textarea id="icon_prefix2" class="materialize-textarea white-text"  placeholder="Subject"></textarea>
         
        </div>
      

      
        <div class="input-field col s3">
          <textarea id="price" class="materialize-textarea white-text" type="text" placeholder="Price"></textarea>
       
        </div>
      

      <div class="input-field col s12"> 
          <textarea
            class="input-field col s10"
            placeholder="Description"
            id="description" class="materialize-textarea white-text"
            value={description}
            onChange={handleChange}
          ></textarea>
          
        </div>
        <div class="col s12">
          <p>
            <button class="waves-effect waves-light btn-small" type="submit">
              Submit
            </button>
          </p>
          <p
            className={` ${
              characterCount === 280 || error ? "text-error" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span>Something went wrong...</span>}
          </p>
        </div>
      </form>
    </div>

    
  );
};

export default AssignmentForm;


{/* */}