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

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSignup = () => {
    // 在真实应用中，这里应该进行注册逻辑的处理
    console.log('Signup:', { name, email, username, password });
  };



  return (
    <Box maxW="md" mx="auto" mt={8} p={4} >
      <Heading mb={4}>
        Register an Account
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={handleNameChange} mb={2} />
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={handleEmailChange} mb={2} />
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
          mb={2}
        />
        <FormLabel>Password Confirmation</FormLabel>
        <Input
          type="password"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
          mb={4}
        />
        <Button colorScheme="blue" onClick={handleSignup}>
          Sign Up
        </Button>

        <Box mt={2}>
            <Link to="/logining" color="blue">
                Already have an Account? Log In
            </Link>        
        </Box>
      </FormControl>
    </Box>
  );
};

export default SignupPage;
