import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (

    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit='cover' />
      </Link>

      {/* 搜索框 */}
      <SearchInput />
      {/* 主题切换 */}
      <ColorModeSwitch />
    </HStack>
    
  );
};

export default NavBar;
