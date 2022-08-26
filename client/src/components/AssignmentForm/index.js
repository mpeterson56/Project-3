import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_ASSIGNMENT } from "../../utils/mutations";
import { QUERY_ASSIGNMENTS, QUERY_ME_STUDENT } from "../../utils/queries";

const AssignmentForm = () => {
  const [assignment, setText] = useState({
    description: "",
    subject: "",
    askPrice: "",
  });
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
              assignments: [...me_Student.assignments, addAssignment],
            },
          },
        });
      } catch (e) {
        console.warn("First Assignment insertion by user!");
      }

      // const { me_Student } = cache.readQuery({ query: QUERY_ME_STUDENT });
      // cache.writeQuery({
      //   query: QUERY_ME_STUDENT,
      //     data: {
      //       me_Student: {
      //         ...me_Student,
      //         assignments: [...me_Student.assignments, addAssignment],
      //       },
      //     },
      //   });


      // update thought array's cache
      // const { assignment } = cache.readQuery({ query: QUERY_ASSIGNMENTS, variables: {username: 'tester6' }});
      // cache.writeQuery({
      //   query: QUERY_ASSIGNMENTS,
      //   data: { assignments: [addAssignment, ...assignment] },
      // });
    },
  });

  // update state based on form input changes
  // const handleChange = (event) => {
  //   if (event.target.value.length <= 280) {
  //     setText(event.target.value);
  //     setCharacterCount(event.target.value.length);
  //   }
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText({
      ...assignment,
      [name]: value,
    });
    console.log(assignment)
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addAssignment({
        variables: {
          description: assignment.description,
          subject: assignment.subject,
          askPrice: assignment.askPrice,
        },
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
      <form
        class="col s12 indigo darken white-text"
        onSubmit={handleFormSubmit}
      >
        <div class="input-field col s9">
          <textarea
            id="icon_prefix2"
            class="materialize-textarea white-text"
            name='subject'
            placeholder="Subject"
            onChange={handleChange}
          ></textarea>
        </div>

        <div class="input-field col s3">
          <textarea
            id="price"
            class="materialize-textarea white-text"
            type="text"
            name='askPrice'
            placeholder="Price"
            onChange={handleChange}
          ></textarea>
        </div>

        <div class="input-field col s12">
          <textarea
            class="input-field col s10 materialize-textarea white-text"
            placeholder="Description"
            id="description"
            name='description'
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
