import React, { useState } from 'react';

import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import APIClient from '../services/api-dev-client';
import token from '../entities/Token';

const LoginPage = () => {

  const toast = useToast();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const apiClient = new APIClient<token>('/login/');

  const handleLogin = () => {

    const loginData = {
      data: {
        username: username,
        password: password,
      },
    };

    // 登录的逻辑
    apiClient.login(loginData)
      .then(response => {
        localStorage.setItem('jwtToken',response.token);
        
        setLoggedIn(true);
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          const errorMessage = error.response.data.error;
          toast({
            title: 'Login Error',
            description: errorMessage,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        } 
      });
    } 

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <Box textAlign="center">
        <Heading>Welcome, {username}!</Heading>
        <Button mt={4} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    );
  }
  
  return (
    <Box maxW="md" mx="auto" mt={8} p={4} >
      <Heading mb={4}>Account Login</Heading>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={handleUsernameChange}          
          mb={2}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          mb={4}
        />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login in
        </Button>      
      </FormControl>

      <Box mt={4} >
        <Link to="/signup" color="blue">
          Don't have an Account? Sign Up    
        </Link>        
      </Box>
    </Box>
  );
};

export default LoginPage;
