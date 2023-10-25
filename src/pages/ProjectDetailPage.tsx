import {  
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Tag
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';

import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import useProject from '../hooks/useProject';
import ProjectScreenshots from '../components/ProjectScreenshots';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { data: project, isLoading, error } = useProject(slug!);

  if (isLoading) return <Spinner />;
  if (error || !project) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>      
        <GridItem  marginLeft="300px" >
          <Box>
            <Heading size="md" mb="2">
              TOOLS & STACKS
            </Heading>            
            <Flex mt={3} flexWrap="wrap">
              {project.tags.map((skill, index) => (
              <Tag
                key={index}
                mr={6}
                mb={6}
                colorScheme="blue"
                variant="solid"
                borderRadius="full"
                py={2}
                px={5} >
               {skill}
              </Tag>
                ))}
            </Flex>           
          </Box>   
          <Box>
            <Heading size="md" mb="2">
              SOURCE & CODE
            </Heading>     
            <Link href='https://chakra-ui.com' isExternal color='blue.500' >
              GITHUB <ExternalLinkIcon mx='2px'/>
            </Link>
          </Box>            
        </GridItem>
        <GridItem >
          <Box >                                                  
              <ProjectScreenshots project={project} />

              <Heading size="md" mb="2" marginTop="30px" color="blue.400">
                {project.author}
              </Heading>

              <Heading size="md" mb="2" marginTop="30px" color="blackAlpha.800" fontSize="3xl">
                {project.title}
              </Heading>

              <Box mb="4" marginTop="40px">
                <Heading size="md" mb="2">
                  ABOUT THE PROJECT
                </Heading>
                <ExpandableText>{project.description}</ExpandableText>
              </Box>
          </Box>        
        </GridItem>
      </SimpleGrid>
  );
};
export default ProjectDetailPage;
