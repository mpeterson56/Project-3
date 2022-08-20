import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_TUTOR } from '../../utils/mutations';
import Auth from '../../utils/auth';

function TutorLogin(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_TUTOR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      {/* <Link to="/signup">Go to Signup</Link> */}

      <h4 class="green-text text-darken-4">Tutor Login</h4>
      <form class="col s4 green darken-4" onSubmit={handleFormSubmit}>
        <div>
          <label class="white-text" htmlFor="email">Email address:</label>
          <input class="white-text"
            placeholder="Your Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label class="white-text" htmlFor="pwd">Password:</label>
          <input class="white-text"
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
        <div> <p>
                <button class="waves-effect waves-light btn-small" type="submit">Submit</button>
                <span>     </span>
                <button class="waves-effect waves-light btn-small" to="/signup">Go to Signup</button>
               
                </p>
       
        </div>
      </form>
    </div>
  );
}

export default TutorLogin;