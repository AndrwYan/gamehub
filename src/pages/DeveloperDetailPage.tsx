import {
  Box,
  GridItem,
  SimpleGrid,
  Spinner
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import useDeveloper from '../hooks/useDeveloper';
import SingleProfileCard from '../components/SingleProfileCard';

const DeveloperDetailPage = () => {
  
  const { slug } = useParams();
  const { data: profile, isLoading, error } = useDeveloper(slug!);

  if (isLoading) return <Spinner />;

  if (error || !profile) throw error;
  
  return (
    <Box marginTop="1px" marginLeft="100px">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <SingleProfileCard profile={profile}/>
        </GridItem>
        <GridItem>          
        </GridItem>
      </SimpleGrid>
    </Box>  
  );
};
export default DeveloperDetailPage;
