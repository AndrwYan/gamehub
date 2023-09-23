import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../LoginStore';
import TokenManager from '../services/TokenManager';
import {Text, Box, GridItem, Heading, SimpleGrid, Spinner, Stack, Wrap, WrapItem, useToast } from '@chakra-ui/react';

import AccountProfileCard from '../components/AccountProfileCard';
import useProfile from '../hooks/useProfile';
import SkillItem from '../components/SkillItem';

const AccountPage = () => {

  // 初始化token的结果。
  const tokenManager = new TokenManager();  

  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const userId = tokenManager.getUserId();

  // 调用之前封装的查询用户信息的组件
  const { data: profile, isLoading, error } = useProfile(userId!);
  
  if (isLoading) return <Spinner />;
  if (error || !profile) throw error;

  useEffect(() => {     
    if (tokenManager.isTokenExpired()) {
      // 删掉Token，登录状态设置为false
      logout();
      // Token 已过期，导航到登录页面
      navigate('/logining');
    }
  }, [navigate, tokenManager]);


  const toast = useToast();

  const [skills, setSkills] = useState(profile.skills);

  const handleDeleteSkill = (id: string) => {
    // 处理删除技能操作
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
    toast({
      title: 'Skill Deleted',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdateSkill = (id, newName) => {
    // 处理更新技能操作
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id ? { ...skill, name: newName } : skill
      )
    );
  };


  return (
    <Box marginTop="1px" marginLeft="100px">
    <SimpleGrid columns={{ base: 1, md: 2 }} >      

      <GridItem>
        <AccountProfileCard profile={profile} />
      </GridItem>  

      <GridItem >
      
        <Heading size="md" mb="2"  color="blackAlpha.800" fontSize="3xl">
          About Me
        </Heading>

        <Stack spacing={3}>
          <Text fontSize='xl'> {profile.bio} </Text>
        </Stack>     

        <Box marginTop="10px" >
            <Stack spacing={3}>
              <Heading size="md" mb="2" color="blackAlpha.800" fontSize="3xl">
                Skills
              </Heading>
              {profile.skills.map((skill) => (
                <SkillItem
                  key={ skill.id }
                  skill={skill}
                  onDeleteSkill={handleDeleteSkill}
                  onUpdateSkill={handleUpdateSkill}
                />
              ))}
            </Stack>
        </Box>      

      </GridItem>
    </SimpleGrid>
  </Box>             
  );
}
export default AccountPage;
