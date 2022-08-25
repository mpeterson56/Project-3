import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_STUDENT } from '../../utils/mutations'

function StudentSignup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
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
        <div>
            <Link to="/studentLogin">Go to Login</Link>

            <h2>Student Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        placeholder="username"
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
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
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default StudentSignup;