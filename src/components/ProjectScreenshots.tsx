import { Image, SimpleGrid } from '@chakra-ui/react';
import Project from '../entities/Project';
import { getProfileImageUrl } from '../services/image-url';

interface Props {
  project: Project;
}

const ProjectScreenshots = ({ project }: Props) => {

  return (
    // columns={{ base: 1, md: 2 }} spacing={2}
    <SimpleGrid >
        <Image key={project.id} src={ getProfileImageUrl(project.featured_image)} />
    </SimpleGrid>
  )
}

export default ProjectScreenshots;