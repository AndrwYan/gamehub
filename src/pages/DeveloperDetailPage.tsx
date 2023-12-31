import {
  Badge,
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import useDeveloper from '../hooks/useDeveloper';
import SingleProfileCard from '../components/SingleProfileCard';
import ExpandableText from '../components/ExpandableText';
import ProjectCard from '../components/ProjectCard';
import GameCardContainer from '../components/GameCardContainer';

const DeveloperDetailPage = () => {            
  // 获取到路径的参数
  const { slug } = useParams();
  const { data: profile, isLoading, error } = useDeveloper(slug!);

  if (isLoading) return <Spinner />;
  if (error || !profile) throw error;

  return (
    <Box marginTop="1px" marginLeft="100px">
      <SimpleGrid columns={{ base: 1, md: 2 }} >
        {/* 简历 */}
        <GridItem>
          <SingleProfileCard profile={profile}/>
        </GridItem>

        <GridItem >
          <Box >                                                  
              {/* mb控制组件 */}
              <Box mb="4">
                <Heading size="md" mb="2">
                  About Me
                </Heading>
                <ExpandableText>{profile.bio}</ExpandableText>
              </Box>

              <Heading size="md" mb="2">
                Top Skills
              </Heading>
              <Wrap mb="4">
                {profile.top_skills.map((skill, index) => (
                  <WrapItem key={index}>
                    <Badge colorScheme="blue" variant="solid" mr="2" mb="2">
                      {skill}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>

              <Heading size="md" mb="2">
                Other Skills
              </Heading>
              <Wrap>
                {profile.other_skills.map((skill, index) => (
                  <WrapItem key={index}>
                    <Badge colorScheme="green" variant="solid" mr="2" mb="2">
                      {skill}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>              
          </Box>                    
          <Box mt="20px">
            <Heading size="md" mb="4">
                Projects
            </Heading>  
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {/* 循环组件 */}
              {profile.projects.map((project) => (
                  <GameCardContainer key={project.projectId}>
                    <ProjectCard project={project} />
                  </GameCardContainer>
              ))}
            </SimpleGrid>  
          </Box>        
        </GridItem>
      </SimpleGrid>
    </Box>  
  );
};
export default DeveloperDetailPage;
