import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_TUTOR } from "../../utils/mutations";

function TutorSignup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addTutor] = useMutation(ADD_TUTOR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addTutor({
      variables: {
        tutorname: formState.tutorname,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addTutor.token;
    Auth.login(token);
    console.log("token", token)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="row">
      <h4 class="green-text text-darken-4">Tutor Signup</h4>
      <form class="col s4 green darken-4" onSubmit={handleFormSubmit}>
        <div>
          <label class="white-text" htmlFor="tutorName">
            Tutorname:
          </label>
          <input
            class="white-text"
            placeholder="tutorname"
            name="tutorname"
            type="text"
            id="tutorname"
            onChange={handleChange}
          />
        </div>
        <div>
          <label class="white-text" htmlFor="email">
            Email:
          </label>
          <input
            class="white-text"
            placeholder="Your Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label class="white-text" htmlFor="pwd">
            Password:
          </label>
          <input
            class="white-text"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
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

export default TutorSignup;
