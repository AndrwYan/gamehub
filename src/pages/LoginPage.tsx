import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // 在真实应用中，这里应该进行与后端的交互来验证用户名和密码

    
    setLoggedIn(true);
  };

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
