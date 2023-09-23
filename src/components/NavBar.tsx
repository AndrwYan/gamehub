import { Box, Flex, Image, List, ListItem, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import { useAuthStore } from '../LoginStore';

const Header = () => {  

  const { isLoggedIn, login, token , logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box as="header" bg="purple.600" p={4} color="white">
      <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">

        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>

        <List className="header__menu" display="flex" alignItems="center">

          <ListItem className="header__menuItem" mr={4}>
            <Link to="/" style={{ fontSize: '25px' }}>
              Developers
            </Link>
          </ListItem>

          <ListItem className="header__menuItem" style={{ margin: '0 20px' }}>
            <Link to="/projects" style={{ fontSize: '25px' }}>
              Projects
            </Link>
          </ListItem>
          
          { isLoggedIn && <ListItem className="header__menuItem" style={{ margin: '0 20px' }}>
            <Link to="/account" style={{ fontSize: '25px' }}>
              Account
            </Link>
          </ListItem> }

        </List>              
        <Flex alignItems="center">                  
        { isLoggedIn ? (
            <Link to="/logining">
              <Button variant="outline" colorScheme="whiteAlpha" style={{ fontSize: '25px' }} onClick={handleLogout}>
                Logout
              </Button>
            </Link>
          ) : (
            <Link to="/logining">
              <Button variant="outline" colorScheme="whiteAlpha"  style={{ fontSize: '25px' }}>
                Login/Sign Up
              </Button>
            </Link>
          )}
        </Flex>
        <ColorModeSwitch />

      </Flex>
    </Box>
  );
};

export default Header;
