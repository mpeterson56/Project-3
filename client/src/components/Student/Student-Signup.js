import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_STUDENT } from "../../utils/mutations";

function StudentSignup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addStudent] = useMutation(ADD_STUDENT);

<<<<<<< HEAD
=======
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addStudent({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addStudent.token;
    Auth.login(token);
    console.log("token", token);
  };
>>>>>>> 174be030a3a44b606f2fd63318223e69379a808e

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

<<<<<<< HEAD
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     const mutationResponse = await addStudent({
    //         variables: {
    //             username: formState.username,
    //             email: formState.email,
    //             password: formState.password,
    //         },
    //     });
    //     const token = mutationResponse.data.addStudent.token;
    //     Auth.login(token);
    // };


  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addStudent({
        variables: { ...formState },
      });

      Auth.login(data.addStudent.token);
    } catch (e) {
      console.error(e);
    }
  };

    

    return (
=======
  return (
    <div class="row">
      <h4 class="indigo-text text-darken-4">Student Signup</h4>

      <form class="col s4 indigo darken-4" onSubmit={handleFormSubmit}>
>>>>>>> 174be030a3a44b606f2fd63318223e69379a808e
        <div>
          <label class="white-text" htmlFor="username">
            Username:
          </label>
          <input
            placeholder="username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
            class="white-text"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Your Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            class="white-text"
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            class="white-text"
          />
        </div>
        <div>
          <p>
            <button class="waves-effect waves-light btn-small" type="submit">
              Submit
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default StudentSignup;
