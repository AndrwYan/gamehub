import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../LoginStore';
import TokenManager from '../services/TokenManager';
import { Box, GridItem, Heading, SimpleGrid, Spinner, Wrap, WrapItem } from '@chakra-ui/react';

import useDeveloper from '../hooks/useDeveloper';
import AccountProfileCard from '../components/AccountProfileCard';

const AccountPage = () => {
  
  // 初始化token的结果
  const tokenManager = new TokenManager();  

  // const navigate = useNavigate();
  // const { logout } = useAuthStore();

  const userId = tokenManager.getUserId();

  // 调用之前封装的查询用户信息的组件
  const { data: profile, isLoading, error } = useDeveloper(userId!);

  if (isLoading) return <Spinner />;
  if (error || !profile) throw error;

  // useEffect(() => {    
  //   if (tokenManager.isTokenExpired()) {
  //     // 删掉Token，登录状态设置为false
  //     logout();
  //     // Token 已过期，导航到登录页面
  //     navigate('/logining');
  //   }
  // }, [navigate, tokenManager]);

  return (
    <Box marginTop="1px" marginLeft="100px">
    <SimpleGrid columns={{ base: 1, md: 2 }} >

      <GridItem>
        <AccountProfileCard profile={profile}/>
      </GridItem>
                
    </SimpleGrid>
  </Box>             
  );
}

export default AccountPage;
