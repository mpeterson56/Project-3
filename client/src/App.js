import './App.css';
import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentLogin from './components/Student/Student-Login';
import TutorLogin from './components/Tutor/Tutor-Login';
import StudentSignup from './components/Student/Student-Signup';
import TutorSignup from './components/Tutor/Tutor-Signup';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})


function App() {
  const [checked, setChecked] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
      <StudentSignup />
      <TutorSignup />
      <StudentLogin />
      <TutorLogin />
      <Routes>
        
      </Routes>

      </Router>
    
    </ApolloProvider>
  );
}

export default App;
