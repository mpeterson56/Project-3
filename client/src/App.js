import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SignupForm from './components/Signup';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
      <SignupForm setChecked={setChecked} checked={checked} />
      <Routes>
        
      </Routes>

      </Router>
    
    </ApolloProvider>
  );
}

export default App;
