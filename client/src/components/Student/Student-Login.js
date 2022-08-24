import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_STUDENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

function StudentLogin(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_STUDENT);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const mutationResponse = await login({
    //     variables: { email: formState.email, password: formState.password },
    //   });
    //   const token = mutationResponse.data.loginStudent.token;
    //   Auth.login(token);
    // } catch (e) {
    //   console.log(e);
    // }
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });


  };

  

  return (
    <div>
      <Link to="/studentSignup">Go to Signup</Link>

      <h2>Student Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="Your Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
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
          />
        </div>
        {error ? (
          <div>
            <p>The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default StudentLogin;