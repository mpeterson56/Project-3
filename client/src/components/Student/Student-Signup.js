import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_STUDENT } from '../../utils/mutations'

function StudentSignup(props) {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addStudent] = useMutation(ADD_STUDENT);

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
    
            <h4 class="indigo-text text-darken-4">Student Signup</h4>
            <form class="col s4 indigo darken-4" onSubmit={handleFormSubmit}>
                <div>
                    <label class="white-text" htmlFor="first_name">Username:</label>
                    <input class="white-text"
                        placeholder="Username"
                        name="first_name"
                        type="text"
                        id="first_name"
                        onChange={handleChange}
                    />
                    </div>
                    
                <div>
                    <label class="white-text" htmlFor="email">Email:</label>
                    <input class="white-text"
                        placeholder="Your Email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div >
                    <label class="white-text" htmlFor="pwd">Password:</label>
                    <input class="white-text"
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                <div >
                <p>
                <button class="waves-effect waves-light btn-small" type="submit">Submit</button>
                <span>     </span>
                </p>
                </div>
                {/* <p>
                <button class="waves-effect waves-light btn-small" to="/studentLogin">Student Login</button>
                <span>     </span>
                <button class="waves-effect waves-light btn-small" to="/tutorLogin">Tutor Login</button>
                <span>     </span>
                <button class="waves-effect waves-light btn-small" to="/tutorSignup">Tutor Sign Up</button>
                </p> */}
            </form>
            
        </div> 
    );
}

export default StudentSignup;