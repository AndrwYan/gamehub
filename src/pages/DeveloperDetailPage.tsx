import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import useDeveloper from '../hooks/useDeveloper';

const DeveloperDetailPage = () => {
  
  // 从router中获取
  const { slug } = useParams();
  const { data: game, isLoading, error } = useDeveloper(slug!);

  if (isLoading) return <Spinner/>;

  if (error || !game) throw error;

  return (
  
  );
};
export default DeveloperDetailPage;
