import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { getProfileImageUrl} from '../services/image-url';
import Project from '../entities/Project';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div style={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
      <Card style={{ flex: 1 }}>
        <Image  src={getProfileImageUrl(project.featured_image)} />
        <CardBody>          
          <HStack justifyContent="space-between" marginBottom={3}>          
            <Heading size="md" mb="2">
              <Link to={'/project/' + project.projectId}> {project.title}</Link>
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" marginBottom={3}>
            <Heading size="s" mb="2" color="teal">
               by {project.author} 
            </Heading>
          </HStack>        
          <HStack justifyContent="space-between" marginBottom={3}>
            <Heading size="s" mb="2" color="teal">
               {project.vote_ratio} % Positive Feedback ({project.vote_total}) Votes
            </Heading>        
          </HStack>
          <HStack justifyContent="space-between" marginBottom={3}>            
            <Wrap>
                  {project.tags.map((skill, index) => (
                    <WrapItem key={index}>
                      <Badge colorScheme="blue" variant="solid" mr="2" mb="2">
                        {skill}
                      </Badge>
                    </WrapItem>
                  ))}
            </Wrap>
          </HStack>                  
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
